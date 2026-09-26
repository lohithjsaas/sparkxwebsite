import type { Metadata } from "next"
import { HomePage } from "@/components/home-page"
import { getInstagramReels } from "@/lib/instagram"
import { SITE_URL, business } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "SparkX Auto Detailing | PPF & Ceramic Coating in Bengaluru" },
  description:
    "Premium car & bike detailing in Akshayanagar, Bengaluru: PPF, ceramic coating, car wraps & car wash. Open 7 days, 9 AM–8 PM. Call +91-6362613388.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: "SparkX Auto Detailing — Premium Car Detailing in Bengaluru",
    description: business.description,
  },
}

// Refresh the reels (and their signed video URLs) hourly.
export const revalidate = 3600

export default async function Page() {
  const reels = await getInstagramReels(16)
  return <HomePage reels={reels} />
}
