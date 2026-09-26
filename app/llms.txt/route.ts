import { SITE_URL, business, services, ppfFaqs } from "@/lib/site"

// llms.txt (https://llmstxt.org): a plain-text brief that helps AI answer engines
// (ChatGPT, Claude, Perplexity, Gemini) describe and cite the business accurately.
export const dynamic = "force-static"

const rupees = (n: number) => `₹${n.toLocaleString("en-IN")}`

export function GET() {
  const a = business.address
  const body = `# ${business.name}

> ${business.description}

## Key facts
- Business: ${business.name} (${business.legalName})
- Category: Car detailing studio, paint protection film (PPF) installer, ceramic coating, car wrapping and bike detailing
- Address: ${a.streetAddress}, ${a.addressLocality}, ${a.addressRegion} ${a.postalCode}, India
- Coordinates: ${business.geo.latitude}, ${business.geo.longitude}
- Google Maps: ${business.mapsUrl}
- Phone / WhatsApp: ${business.phone} (${business.whatsapp})
- Email: ${business.email}
- Hours: ${business.hoursText}
- Areas served: ${business.areaServed.join(", ")}
- Instagram: ${business.sameAs.join(", ")}
- Book online: ${SITE_URL}/book-appointment

## Services and prices
${services
  .map(
    (s) =>
      `### [${s.name}](${SITE_URL}${s.path})\n${s.description}${
        s.offers.length
          ? "\n" + s.offers.map((o) => `- ${o.name}: ${o.from ? "from " : ""}${rupees(o.price)}`).join("\n")
          : ""
      }`,
  )
  .join("\n\n")}

## Paint Protection Film FAQ
${ppfFaqs.map((f) => `- **${f.q}** ${f.a}`).join("\n")}

## Pages
- [Home](${SITE_URL}/)
${services.map((s) => `- [${s.name}](${SITE_URL}${s.path})`).join("\n")}
- [Our Works — Instagram reels of recent projects](${SITE_URL}/our-works)
- [Testimonials](${SITE_URL}/testimonials)
- [Contact](${SITE_URL}/contact)
- [Book an Appointment](${SITE_URL}/book-appointment)
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
