// Single source of truth for business facts used by metadata, JSON-LD, sitemap and llms.txt.
// Keep these in sync with the visible content (address, phone, hours, prices).

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.sparkxdetailing.in").replace(/\/$/, "")

export const business = {
  name: "SparkX Auto Detailing",
  legalName: "Sparkx Detailing",
  shortName: "SparkX",
  tagline: "Premium Car & Bike Detailing in Bengaluru",
  description:
    "SparkX Auto Detailing is a premium car and bike detailing studio in Akshayanagar, Bengaluru offering paint protection film (PPF), ceramic & graphene coating, vinyl body wrapping, premium car wash, interior detailing and motorcycle detailing.",
  phone: "+91-6362613388",
  phoneE164: "+916362613388",
  whatsapp: "https://wa.me/916362613388",
  email: "prabhu@sparkxdetailing.in",
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Your%20paragraph%20text-GGRhFv9YTEF0GNWR5JcKcm1t5d1B8T.png",
  address: {
    streetAddress: "Yelenahalli Main Rd, Akshayanagara West, DLF Newtown, Akshayanagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    regionCode: "IN-KA",
    postalCode: "560076",
    addressCountry: "IN",
  },
  // From the Google Maps embed on the contact page.
  geo: { latitude: 12.874893, longitude: 77.613895 },
  mapsUrl: "https://maps.google.com/?cid=319524569723448991",
  hours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "09:00", closes: "20:00" },
  hoursText: "Monday - Sunday: 9:00 AM - 8:00 PM",
  sameAs: ["https://www.instagram.com/sparkxdetailing"],
  areaServed: [
    "Akshayanagar",
    "DLF Newtown",
    "Yelenahalli",
    "Hulimavu",
    "Begur",
    "Bannerghatta Road",
    "Arekere",
    "Bommanahalli",
    "HSR Layout",
    "BTM Layout",
    "JP Nagar",
    "Electronic City",
    "Bengaluru",
  ],
  priceRange: "₹699 - ₹1,20,000+",
}

export type ServiceOffer = { name: string; price: number; from?: boolean }

export type ServiceInfo = {
  slug: string
  path: string
  name: string
  serviceType: string
  title: string
  description: string
  keywords: string[]
  image: string
  offers: ServiceOffer[]
}

export const services: ServiceInfo[] = [
  {
    slug: "premium-car-wash",
    path: "/services/premium-car-wash",
    name: "Premium Car Wash & Detailing",
    serviceType: "Car wash and car detailing",
    title: "Premium Car Wash & Car Detailing in Bengaluru",
    description:
      "Premium car wash & interior/exterior car detailing in Akshayanagar, Bengaluru. Basic wash ₹999, premium detail ₹2,499, ultimate detail ₹4,999. Book now.",
    keywords: ["car wash Bengaluru", "car detailing Bengaluru", "car detailing Akshayanagar", "interior car cleaning Bangalore", "foam car wash near me"],
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1200&auto=format&fit=crop",
    offers: [
      { name: "Basic Wash", price: 999 },
      { name: "Premium Detail", price: 2499 },
      { name: "Ultimate Detail", price: 4999 },
    ],
  },
  {
    slug: "bike-wash",
    path: "/services/bike-wash",
    name: "Bike Wash & Detailing",
    serviceType: "Motorcycle wash and detailing",
    title: "Bike Wash & Motorcycle Detailing in Bengaluru",
    description:
      "Bike wash & motorcycle detailing in Akshayanagar, Bengaluru from ₹699. Safe cleaning, chain care, polishing and protection for every bike. Book at SparkX.",
    keywords: ["bike wash Bengaluru", "bike detailing Bangalore", "motorcycle detailing near me", "superbike detailing Bengaluru", "bike ceramic coating"],
    image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1200&auto=format&fit=crop",
    offers: [
      { name: "Basic Wash", price: 699 },
      { name: "Premium Detail", price: 1499 },
      { name: "Ultimate Detail", price: 2999 },
    ],
  },
  {
    slug: "ppf",
    path: "/services/ppf",
    name: "Paint Protection Film (PPF)",
    serviceType: "Paint protection film installation",
    title: "Paint Protection Film (PPF) for Cars in Bengaluru",
    description:
      "Self-healing, UV-resistant paint protection film (PPF) in Bengaluru. Front-end, partial & full-body PPF with up to 10-year warranty at SparkX Akshayanagar.",
    keywords: ["PPF Bengaluru", "paint protection film Bangalore", "car PPF price Bengaluru", "full body PPF", "self healing PPF near me"],
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1200&auto=format&fit=crop",
    offers: [],
  },
  {
    slug: "ceramic-coating",
    path: "/services/ceramic-coating",
    name: "Ceramic Coating Service",
    serviceType: "Ceramic coating",
    title: "Ceramic & Graphene Coating for Cars in Bengaluru",
    description:
      "Ceramic coating in Bengaluru with paint correction & certified technicians. Silver from ₹20,000, Gold ₹35,000, Platinum ₹60,000. Book at SparkX.",
    keywords: ["ceramic coating Bengaluru", "ceramic coating price Bangalore", "graphene coating Bengaluru", "car coating near me", "paint correction Bengaluru"],
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1200&auto=format&fit=crop",
    offers: [
      { name: "Silver Package", price: 20000, from: true },
      { name: "Gold Package", price: 35000, from: true },
      { name: "Platinum Package", price: 60000, from: true },
    ],
  },
  {
    slug: "body-wrapping",
    path: "/services/body-wrapping",
    name: "Body Wrapping Services",
    serviceType: "Vehicle vinyl wrapping",
    title: "Car Wrapping & Vinyl Body Wraps in Bengaluru",
    description:
      "Colour-change, chrome & custom vinyl car wraps in Bengaluru. Partial wraps from ₹30,000, full wraps from ₹80,000, by expert installers at SparkX.",
    keywords: ["car wrapping Bengaluru", "vinyl wrap Bangalore", "car colour change wrap", "car wrap price Bengaluru", "chrome wrap near me"],
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
    offers: [
      { name: "Partial Wrap", price: 30000, from: true },
      { name: "Full Wrap", price: 80000, from: true },
      { name: "Custom Design Wrap", price: 120000, from: true },
    ],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)!

export const ppfFaqs = [
  {
    q: "How long does PPF last?",
    a: "Our premium PPF typically lasts 7-10 years with proper maintenance. We offer warranties of up to 10 years depending on the package you choose.",
  },
  {
    q: "Is PPF visible once installed?",
    a: "Our high-quality PPF is virtually invisible once installed. It preserves the original appearance of your vehicle while providing exceptional protection.",
  },
  {
    q: "How do I maintain PPF?",
    a: "PPF is low maintenance - simply wash your car as normal using pH-neutral soaps. Avoid harsh chemicals and high-pressure washing directly on the edges of the film.",
  },
  {
    q: "Can PPF be removed?",
    a: "Yes, PPF can be safely removed without damaging your vehicle's paint when professionally done. Our PPF is designed for clean removal even after years of protection.",
  },
]

