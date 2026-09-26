const GRAPH_API_VERSION = process.env.INSTAGRAM_GRAPH_API_VERSION || "v23.0"
const GRAPH_BASE = `https://graph.facebook.com/${GRAPH_API_VERSION}`
const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME || "sparkxdetailing"
const REVALIDATE_SECONDS = 60 * 60

export type InstagramReel = {
  id: string
  caption?: string
  mediaUrl: string
  thumbnailUrl?: string
  permalink: string
  timestamp: string
}

type GraphMedia = {
  id: string
  caption?: string
  media_type: string
  media_product_type?: string
  media_url?: string
  thumbnail_url?: string
  permalink: string
  timestamp: string
}

type GraphPage<T> = {
  data: T[]
  paging?: { next?: string }
}

async function graphGet<T>(url: string): Promise<T> {
  const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } })
  const body = await res.json()
  if (!res.ok || body.error) {
    throw new Error(`Instagram Graph API error: ${body.error?.message ?? res.statusText}`)
  }
  return body as T
}

// Finds the Instagram Business Account linked to a Facebook Page the system user can access.
async function resolveBusinessAccountId(token: string): Promise<string> {
  if (process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID) return process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID

  const pages = await graphGet<GraphPage<{ instagram_business_account?: { id: string; username: string } }>>(
    `${GRAPH_BASE}/me/accounts?fields=instagram_business_account{id,username}&limit=100&access_token=${token}`,
  )
  const accounts = pages.data.map((p) => p.instagram_business_account).filter((a) => a !== undefined)
  const match = accounts.find((a) => a.username.toLowerCase() === INSTAGRAM_USERNAME.toLowerCase()) ?? accounts[0]
  if (!match) {
    throw new Error("No Instagram Business Account found for this system user token")
  }
  return match.id
}

export async function getInstagramReels(limit = 24): Promise<InstagramReel[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  if (!token) {
    console.warn("INSTAGRAM_ACCESS_TOKEN is not set; skipping Instagram reels")
    return []
  }

  try {
    const igId = await resolveBusinessAccountId(token)
    const fields = "id,caption,media_type,media_product_type,media_url,thumbnail_url,permalink,timestamp"
    let url: string | undefined = `${GRAPH_BASE}/${igId}/media?fields=${fields}&limit=50&access_token=${token}`
    const reels: InstagramReel[] = []

    // Page through media until we have enough reels (capped to avoid runaway requests).
    for (let pageCount = 0; url && reels.length < limit && pageCount < 5; pageCount++) {
      const page: GraphPage<GraphMedia> = await graphGet<GraphPage<GraphMedia>>(url)
      for (const m of page.data) {
        // Reels only — skip photos, carousels, and reels without a playable video URL.
        if (m.media_product_type === "REELS" && m.media_type === "VIDEO" && m.media_url) {
          reels.push({
            id: m.id,
            caption: m.caption,
            mediaUrl: m.media_url!,
            thumbnailUrl: m.thumbnail_url,
            permalink: m.permalink,
            timestamp: m.timestamp,
          })
        }
      }
      url = page.paging?.next
    }

    return reels.slice(0, limit)
  } catch (error) {
    console.error(error)
    return []
  }
}
