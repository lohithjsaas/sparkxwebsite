import type { Metadata } from "next"
import { HomePage } from "@/components/home-page"
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

export default function Page() {
  return <HomePage />
}
