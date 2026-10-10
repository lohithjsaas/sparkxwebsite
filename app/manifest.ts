import type { MetadataRoute } from "next"
import { business } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.name,
    short_name: business.shortName,
    description: business.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    categories: ["automotive", "business"],
    icons: [
      { src: "/favicon.ico", sizes: "16x16 32x32", type: "image/x-icon" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  }
}
