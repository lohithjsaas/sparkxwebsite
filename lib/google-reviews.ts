import { business } from "@/lib/site"
import { manualGoogleReviews } from "@/lib/google-reviews-data"

// Google reviews for the business, from one of two sources:
//  1. Google Business Profile API — every review. Needs an approved GBP API project + owner OAuth
//     (GOOGLE_OAUTH_CLIENT_ID / GOOGLE_OAUTH_CLIENT_SECRET / GOOGLE_OAUTH_REFRESH_TOKEN,
//      GOOGLE_BUSINESS_ACCOUNT_ID, GOOGLE_BUSINESS_LOCATION_ID). See scripts/google-business-auth.mjs.
//  2. Places API (New) — the 5 "most relevant" reviews. Needs GOOGLE_PLACES_API_KEY
//     (and optionally GOOGLE_PLACE_ID; otherwise it's looked up by name + address).
//  3. Fallback: the hardcoded snapshot in lib/google-reviews-data.ts.

const REVALIDATE_SECONDS = 60 * 60

export type GoogleReview = {
  id: string
  author: string
  authorPhoto?: string
  authorUrl?: string
  rating: number
  text: string
  publishedAt?: string
  relativeTime?: string
  truncated?: boolean
  localGuide?: boolean
}

export type GoogleReviewsData = {
  rating: number
  total: number
  reviews: GoogleReview[]
  mapsUrl: string
  writeReviewUrl?: string
  source: "business-profile" | "places" | "manual"
}

async function getJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, { ...init, next: { revalidate: REVALIDATE_SECONDS } })
  const body = await res.json()
  if (!res.ok || body.error) {
    throw new Error(`Google API error (${res.status}): ${body.error?.message ?? res.statusText}`)
  }
  return body as T
}

const STAR_VALUES: Record<string, number> = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 }

async function fromBusinessProfile(): Promise<GoogleReviewsData | null> {
  const {
    GOOGLE_OAUTH_CLIENT_ID: clientId,
    GOOGLE_OAUTH_CLIENT_SECRET: clientSecret,
    GOOGLE_OAUTH_REFRESH_TOKEN: refreshToken,
    GOOGLE_BUSINESS_ACCOUNT_ID: accountId,
    GOOGLE_BUSINESS_LOCATION_ID: locationId,
  } = process.env
  if (!clientId || !clientSecret || !refreshToken || !accountId || !locationId) return null

  // Access tokens last an hour; cache one for 50 minutes so the page stays statically regenerated.
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
    next: { revalidate: 50 * 60 },
  })
  const token = await tokenRes.json()
  if (!tokenRes.ok) throw new Error(`Google OAuth error: ${token.error_description ?? token.error}`)
  const headers = { Authorization: `Bearer ${token.access_token}` }

  type GbpReview = {
    reviewId: string
    reviewer: { displayName?: string; profilePhotoUrl?: string; isAnonymous?: boolean }
    starRating: string
    comment?: string
    createTime: string
  }
  type GbpPage = { reviews?: GbpReview[]; averageRating?: number; totalReviewCount?: number; nextPageToken?: string }

  const base = `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`
  const reviews: GoogleReview[] = []
  let rating = 0
  let total = 0
  let pageToken: string | undefined
  for (let page = 0; page < 20; page++) {
    const url = `${base}?pageSize=50&orderBy=updateTime%20desc${pageToken ? `&pageToken=${pageToken}` : ""}`
    const data = await getJson<GbpPage>(url, { headers })
    rating = data.averageRating ?? rating
    total = data.totalReviewCount ?? total
    for (const r of data.reviews ?? []) {
      reviews.push({
        id: r.reviewId,
        author: r.reviewer.isAnonymous ? "A Google user" : r.reviewer.displayName || "A Google user",
        authorPhoto: r.reviewer.profilePhotoUrl,
        rating: STAR_VALUES[r.starRating] ?? 0,
        // GBP appends Google's auto-translation after "(Translated by Google)"; keep the original.
        text: (r.comment ?? "").split("(Translated by Google)")[0].replace(/\(Original\)\s*/, "").trim(),
        publishedAt: r.createTime,
      })
    }
    pageToken = data.nextPageToken
    if (!pageToken) break
  }

  // Location metadata gives the canonical Maps + "write a review" links.
  let mapsUrl: string = business.mapsUrl
  let writeReviewUrl: string | undefined
  try {
    const loc = await getJson<{ metadata?: { mapsUri?: string; newReviewUri?: string } }>(
      `https://mybusinessbusinessinformation.googleapis.com/v1/locations/${locationId}?readMask=metadata`,
      { headers },
    )
    mapsUrl = loc.metadata?.mapsUri ?? mapsUrl
    writeReviewUrl = loc.metadata?.newReviewUri
  } catch {
    // Links are a nice-to-have; reviews still render without them.
  }

  return { rating, total, reviews, mapsUrl, writeReviewUrl, source: "business-profile" }
}

async function fromPlaces(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) return null

  let placeId = process.env.GOOGLE_PLACE_ID
  if (!placeId) {
    const a = business.address
    const found = await getJson<{ places?: { id: string }[] }>("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": "places.id" },
      body: JSON.stringify({ textQuery: `${business.name}, ${a.streetAddress}, ${a.addressLocality} ${a.postalCode}` }),
    })
    placeId = found.places?.[0]?.id
    if (!placeId) throw new Error("Google Places: business not found — set GOOGLE_PLACE_ID")
  }

  type PlacesReview = {
    name: string
    rating: number
    text?: { text: string }
    originalText?: { text: string }
    relativePublishTimeDescription?: string
    publishTime?: string
    authorAttribution?: { displayName?: string; uri?: string; photoUri?: string }
  }
  const place = await getJson<{
    rating?: number
    userRatingCount?: number
    googleMapsUri?: string
    reviews?: PlacesReview[]
  }>(`https://places.googleapis.com/v1/places/${placeId}?languageCode=en`, {
    headers: { "X-Goog-Api-Key": apiKey, "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews" },
  })

  return {
    rating: place.rating ?? 0,
    total: place.userRatingCount ?? 0,
    mapsUrl: place.googleMapsUri ?? business.mapsUrl,
    writeReviewUrl: `https://search.google.com/local/writereview?placeid=${placeId}`,
    source: "places",
    reviews: (place.reviews ?? []).map((r) => ({
      id: r.name,
      author: r.authorAttribution?.displayName || "A Google user",
      authorPhoto: r.authorAttribution?.photoUri,
      authorUrl: r.authorAttribution?.uri,
      rating: r.rating,
      text: (r.originalText?.text ?? r.text?.text ?? "").trim(),
      publishedAt: r.publishTime,
      relativeTime: r.relativePublishTimeDescription,
    })),
  }
}

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  for (const source of [fromBusinessProfile, fromPlaces]) {
    try {
      const data = await source()
      if (data) return { ...data, reviews: data.reviews.filter((r) => r.text) }
    } catch (error) {
      console.error(error)
    }
  }
  return manualGoogleReviews
}
