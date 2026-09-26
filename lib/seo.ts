import type { Metadata } from "next"
import { SITE_URL, business, type ServiceInfo } from "@/lib/site"

const BUSINESS_ID = `${SITE_URL}/#business`
const WEBSITE_ID = `${SITE_URL}/#website`

// Per-page metadata with canonical URL, Open Graph and Twitter cards.
export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
}): Metadata {
  const url = `${SITE_URL}${path}`
  // Pages without their own photo fall back to the generated share card (app/opengraph-image.tsx).
  const images = [{ url: image ?? `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: title }]
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${business.name}`,
      description,
      siteName: business.name,
      locale: "en_IN",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${business.name}`,
      description,
      images: images.map((i) => i.url),
    },
  }
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: business.address.streetAddress,
  addressLocality: business.address.addressLocality,
  addressRegion: business.address.addressRegion,
  postalCode: business.address.postalCode,
  addressCountry: business.address.addressCountry,
}

// LocalBusiness (AutoWash) and WebSite entities, rendered once in the root layout.
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AutoWash", "LocalBusiness"],
        "@id": BUSINESS_ID,
        name: business.name,
        legalName: business.legalName,
        alternateName: [business.shortName, "Sparkx Detailing", "SparkX Detailing Bengaluru"],
        description: business.description,
        slogan: business.tagline,
        url: SITE_URL,
        logo: business.logo,
        image: [`${SITE_URL}/ferrari.jpg`, business.logo],
        telephone: business.phone,
        email: business.email,
        priceRange: business.priceRange,
        currenciesAccepted: "INR",
        address: postalAddress,
        geo: { "@type": "GeoCoordinates", latitude: business.geo.latitude, longitude: business.geo.longitude },
        hasMap: business.mapsUrl,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: business.hours.days,
            opens: business.hours.opens,
            closes: business.hours.closes,
          },
        ],
        areaServed: business.areaServed.map((name) => ({ "@type": "Place", name: `${name}, Bengaluru` })),
        sameAs: business.sameAs,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: business.phone,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English"],
        },
        potentialAction: {
          "@type": "ReserveAction",
          target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/book-appointment` },
          result: { "@type": "Reservation", name: "Detailing appointment" },
        },
        knowsAbout: [
          "Car detailing",
          "Paint protection film (PPF)",
          "Ceramic coating",
          "Graphene coating",
          "Vinyl car wrapping",
          "Motorcycle detailing",
          "Interior car cleaning",
          "Paint correction",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: business.name,
        inLanguage: "en-IN",
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

// Service entity with its priced packages, linked to the business as provider.
export function serviceJsonLd(service: ServiceInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${service.path}#service`,
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: `${SITE_URL}${service.path}`,
    image: service.image,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: "Bengaluru" },
    ...(service.offers.length > 0 && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service.name} packages`,
        itemListElement: service.offers.map((o) => ({
          "@type": "Offer",
          name: o.name,
          priceCurrency: "INR",
          ...(o.from
            ? { priceSpecification: { "@type": "PriceSpecification", minPrice: o.price, priceCurrency: "INR" } }
            : { price: o.price }),
          availability: "https://schema.org/InStock",
          itemOffered: { "@type": "Service", name: `${service.name} — ${o.name}` },
        })),
      },
    }),
  }
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}
