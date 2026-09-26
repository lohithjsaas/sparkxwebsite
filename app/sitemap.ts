import type { MetadataRoute } from "next"
import { SITE_URL, services } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  })

  return [
    page("", 1, "weekly"),
    ...services.map((s) => page(s.path, 0.9)),
    page("/book-appointment", 0.8),
    page("/our-works", 0.7, "weekly"),
    page("/contact", 0.7),
    page("/testimonials", 0.6),
  ]
}
