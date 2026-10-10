import type { Metadata } from "next"
import { HomePage } from "@/components/home-page"
import { getInstagramReels } from "@/lib/instagram"
import { getGoogleReviews } from "@/lib/google-reviews"
import { SITE_URL, business } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Car Wash & Car Detailing in Bengaluru | SparkX Auto Detailing" },
  description:
    "Car wash, car detailing, PPF & ceramic coating studio in Akshayanagar, Bengaluru, near Bannerghatta Road. Rated 4.9★ on Google. Open 7 days, 9 AM–8 PM. Call +91-6362613388.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: "SparkX Auto Detailing — Premium Car Detailing in Bengaluru",
    description: business.description,
  },
}

// Refresh the reels (and their signed video URLs) and Google reviews hourly.
export const revalidate = 3600

export default async function Page() {
  const [reels, googleReviews] = await Promise.all([getInstagramReels(16), getGoogleReviews()])
  return <HomePage reels={reels} googleReviews={googleReviews} />
}
