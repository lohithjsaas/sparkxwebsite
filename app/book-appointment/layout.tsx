import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Book a Detailing Appointment in Bengaluru",
  description:
    "Book car wash, detailing, PPF, ceramic coating, wraps or bike detailing at SparkX, Akshayanagar, Bengaluru. Pick a date & time online — open 7 days.",
  path: "/book-appointment",
  keywords: ["book car detailing Bengaluru", "car wash booking Bangalore", "ceramic coating appointment", "PPF booking Bengaluru"],
})

export default function BookAppointmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Book an Appointment", path: "/book-appointment" }])} />
      {children}
    </>
  )
}
