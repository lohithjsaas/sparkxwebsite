import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { JsonLd } from "@/components/json-ld"
import { ReviewCard, ReviewsSummary, Stars } from "@/components/google-reviews"
import { getGoogleReviews } from "@/lib/google-reviews"
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Customer Reviews & Testimonials",
  description: "Read what customers say about SparkX Auto Detailing in Bengaluru — ceramic coating, PPF, car detailing and bike detailing reviews from real clients.",
  path: "/testimonials",
  keywords: ["SparkX reviews", "car detailing reviews Bengaluru", "ceramic coating reviews Bangalore"],
})

// Google reviews refresh hourly.
export const revalidate = 3600

export default async function TestimonialsPage() {
  const google = await getGoogleReviews()
  const hasGoogle = google.reviews.length > 0

  return (
    <div className="pb-20 md:pb-28">
      <JsonLd data={breadcrumbJsonLd([{ name: "Testimonials", path: "/testimonials" }])} />
      <PageHeader title="Testimonials" text="See what our satisfied customers have to say about our auto detailing services." />
      <div className="container">
        {hasGoogle ? (
          <>
            <div data-reveal className="mb-8 md:mb-10">
              <ReviewsSummary data={google} />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {google.reviews.map((review) => (
                <ReviewCard key={review.id} review={review} moreUrl={google.mapsUrl} />
              ))}
            </div>
          </>
        ) : (
          // Shown until Google reviews are connected (see lib/google-reviews.ts).
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-surface p-6 md:p-8">
                <div className="mb-4">
                  <Stars rating={5} className="h-5 w-5" />
                </div>
                <p className="text-card-foreground mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand/10 ring-1 ring-brand/20 flex items-center justify-center mr-3">
                    <span className="text-muted-foreground font-medium">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const testimonials = [
  {
    name: "Lohith J",
    initials: "LJ",
    title: "Satisfied Customer",
    content:
      "SparkX did an amazing job on my car. It looks better than when I first bought it! The team was professional and thorough. Highly recommend their services.",
  },
  {
    name: "Niranjan",
    initials: "NR",
    title: "Ceramic Coating Customer",
    content:
      "The ceramic coating service is worth every penny. My car has never looked better and it's so much easier to clean now. The team at SparkX is knowledgeable and friendly.",
  },
  {
    name: "Paul",
    initials: "PL",
    title: "Bike Detailing Customer",
    content:
      "I had my motorcycle detailed at SparkX and I couldn't be happier with the results. They paid attention to every detail and it looks brand new. Great service!",
  },
  {
    name: "Ramesh K",
    initials: "RK",
    title: "Regular Customer",
    content:
      "I've been taking my cars to SparkX for over a year now and they never disappoint. The quality of their work is consistent and their customer service is excellent.",
  },
  {
    name: "Anbu",
    initials: "AB",
    title: "PPF Customer",
    content:
      "The paint protection film they installed on my new car is perfect. You can't even tell it's there, but I know my paint is protected. Worth every penny for the peace of mind.",
  },
]
