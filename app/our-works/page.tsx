import Link from "next/link"
import { Instagram } from "lucide-react"
import { InstagramReels } from "@/components/instagram-reels"
import { PageHeader } from "@/components/page-header"
import { getInstagramReels } from "@/lib/instagram"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Our Works — Detailing, PPF & Coating Reels",
  description: "Watch recent SparkX projects in Bengaluru: ceramic coating, paint protection film, car wraps and detailing transformations straight from our Instagram @sparkxdetailing.",
  path: "/our-works",
  keywords: ["car detailing videos Bengaluru", "ceramic coating before after", "PPF installation video", "SparkX Instagram"],
})

export const revalidate = 3600

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/sparkxdetailing"

export default async function OurWorksPage() {
  const reels = await getInstagramReels()

  return (
    <div className="pb-20 md:pb-28">
      <JsonLd data={breadcrumbJsonLd([{ name: "Our Works", path: "/our-works" }])} />
      <PageHeader
        title="Our Works"
        text="Take a look at some of our recent detailing projects and see the SparkX difference."
      />

      <div className="hero-rise mx-auto w-full max-w-[1600px]" style={{ animationDelay: "0.35s" }}>
        {reels.length > 0 ? (
          <InstagramReels reels={reels} />
        ) : (
          <p className="px-5 text-center text-white/60">Our latest work is on Instagram — check out our reels there.</p>
        )}
      </div>

      <div className="mt-12 flex justify-center px-5 md:mt-16">
        <Link
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-auto"
        >
          <Instagram className="h-[18px] w-[18px]" />
          Follow @sparkxdetailing
        </Link>
      </div>
    </div>
  )
}
