import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AutoScrollRow } from "@/components/auto-scroll-row"
import type { GoogleReview, GoogleReviewsData } from "@/lib/google-reviews"

const STAR_PATH =
  "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"

const dateFormat = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata" })

export function GoogleLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Google" role="img">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  )
}

// "Best Rated on Google" trust badge: Google logo, rating and stars, linking to the listing.
export function RatingBadge({ data, className = "" }: { data: GoogleReviewsData; className?: string }) {
  return (
    <a
      href={data.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex w-fit items-center gap-3 rounded-full bg-black/50 py-2 pl-2.5 pr-4 ring-1 ring-white/10 backdrop-blur-md transition-colors hover:ring-white/25 ${className}`}
      aria-label={`Best rated on Google: ${data.rating.toFixed(1)} out of 5 from ${data.total} reviews`}
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white">
        <GoogleLogo className="h-[18px] w-[18px]" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/55">Best Rated on Google</span>
        <span className="flex items-center gap-1.5">
          <span className="font-display text-[15px] font-semibold text-white">{data.rating.toFixed(1)}</span>
          <Stars rating={data.rating} className="h-3.5 w-3.5" />
          <span className="text-[12.5px] text-white/55">({data.total})</span>
        </span>
      </span>
    </a>
  )
}

// Star rating with fractional fill (e.g. 4.8 fills the fifth star 80%).
export function Stars({ rating, className = "h-4 w-4" }: { rating: number; className?: string }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - i))
        return (
          <span key={i} className={`relative ${className}`}>
            <svg viewBox="0 0 24 24" className={`absolute inset-0 ${className} text-white/15`} fill="currentColor" aria-hidden>
              <path fillRule="evenodd" clipRule="evenodd" d={STAR_PATH} />
            </svg>
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <svg viewBox="0 0 24 24" className={`${className} text-[#FBBC04]`} fill="currentColor" aria-hidden>
                <path fillRule="evenodd" clipRule="evenodd" d={STAR_PATH} />
              </svg>
            </span>
          </span>
        )
      })}
    </div>
  )
}

function Avatar({ review }: { review: GoogleReview }) {
  if (review.authorPhoto) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={review.authorPhoto}
        alt=""
        referrerPolicy="no-referrer"
        loading="lazy"
        className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/10"
      />
    )
  }
  return (
    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/10 text-[14px] font-semibold text-brand ring-1 ring-brand/20">
      {review.author.charAt(0).toUpperCase()}
    </div>
  )
}

export function ReviewCard({
  review,
  clamp = false,
  moreUrl,
}: {
  review: GoogleReview
  clamp?: boolean
  // Link for reviews Google shortened ("… View full review").
  moreUrl?: string
}) {
  const date = review.publishedAt ? dateFormat.format(new Date(review.publishedAt)) : review.relativeTime
  return (
    <figure className="card-surface flex h-full flex-col p-6 lg:p-7">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar review={review} />
          <div className="min-w-0">
            <p className="truncate font-display text-[14.5px] font-semibold">
              {review.authorUrl ? (
                <a href={review.authorUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {review.author}
                </a>
              ) : (
                review.author
              )}
            </p>
            <p className="text-[12.5px] text-white/45">
              {[review.localGuide && "Local Guide", date].filter(Boolean).join(" · ")}
            </p>
          </div>
        </div>
        <GoogleLogo className="h-5 w-5 shrink-0" />
      </div>
      <div className="mt-4">
        <Stars rating={review.rating} />
      </div>
      <blockquote
        className={`mt-3 flex-1 whitespace-pre-line text-[14.5px] leading-relaxed text-white/75 ${clamp ? "line-clamp-6" : ""}`}
      >
        {review.text}
      </blockquote>
      {review.truncated && moreUrl && (
        <a
          href={moreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex w-fit items-center gap-1 text-[13px] font-medium text-brand hover:underline"
        >
          Read on Google
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      )}
    </figure>
  )
}

export function ReviewsSummary({ data, compact = false }: { data: GoogleReviewsData; compact?: boolean }) {
  return (
    <div
      className={`card-surface md:hover:translate-y-0 flex flex-col items-center gap-5 p-6 text-center sm:flex-row sm:justify-between sm:text-left md:p-8 ${
        compact ? "" : "lg:p-10"
      }`}
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <GoogleLogo className="h-12 w-12" />
        <div>
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <span className="font-display text-[40px] font-semibold leading-none tracking-tight">
              {data.rating.toFixed(1)}
            </span>
            <Stars rating={data.rating} className="h-5 w-5" />
          </div>
          <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Best Rated on Google</p>
          <p className="mt-1 text-[14px] text-white/60">
            Based on {data.total.toLocaleString("en-IN")} Google review{data.total === 1 ? "" : "s"}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        {data.writeReviewUrl && (
          <a href={data.writeReviewUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
            Write a Review
          </a>
        )}
        <a href={data.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline group w-full sm:w-auto">
          See All on Google
          <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  )
}

// Homepage section: rating summary + a single auto-scrolling row of review cards.
export function GoogleReviewsSection({ data }: { data: GoogleReviewsData }) {
  return (
    <section className="mx-auto w-full max-w-[1600px] pt-20 md:pt-28 lg:pt-32">
      <div className="mx-auto mb-10 max-w-2xl px-4 text-center md:mb-14">
        <RatingBadge data={data} className="mx-auto mb-6" />
        <h2 className="font-display text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[44px] lg:text-[52px]">
          Google Reviews
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] text-[15px] leading-relaxed text-white/60 md:text-[17px]">
          Rated {data.rating.toFixed(1)} out of 5 by {data.total.toLocaleString("en-IN")} customers on Google.
        </p>
      </div>
      <AutoScrollRow itemLabel="reviews" speed={32}>
        {data.reviews.map((review) => (
          <div key={review.id} className="w-[82vw] max-w-[360px] shrink-0 sm:w-[340px]">
            <ReviewCard review={review} clamp moreUrl={data.mapsUrl} />
          </div>
        ))}
      </AutoScrollRow>
      <div className="mt-8 flex justify-center px-4">
        <Link href="/testimonials" className="btn-outline group w-full sm:w-auto">
          Read All Reviews
          <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  )
}
