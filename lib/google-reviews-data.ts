import type { GoogleReview, GoogleReviewsData } from "@/lib/google-reviews"
import { business } from "@/lib/site"

// Hardcoded snapshot of the public Google reviews for SparkX (copied from the Google Maps listing
// on 28 Sep 2026). Used when neither the Business Profile API nor the Places API is configured.
// To refresh: copy the listing's Reviews tab again and update this list plus RATING / TOTAL.
//
// Dates Google showed as "N weeks ago" are converted to month + year from the snapshot date.
// `truncated` marks reviews Google cut short ("… View full review"); the card links to the listing.

const RATING = 4.9 // overall rating shown on the Google listing
const TOTAL = 34 // every review in the snapshot, including star-only reviews without text

type ManualReview = Omit<GoogleReview, "id" | "rating"> & { rating?: number; truncated?: boolean; localGuide?: boolean }

const reviews: ManualReview[] = [
  { author: "Shiv Sharan Singh", relativeTime: "Sep 2026", text: "Amazing service, great attention to details during wash of interceptor 650" },
  { author: "Annush Krishnan", relativeTime: "Sep 2026", text: "Satisfaction\nPerfect Cleaning\nWorth" },
  {
    author: "Syed Waseem",
    localGuide: true,
    relativeTime: "Aug 2026",
    text: "One of the best washing center I have ever been too, iam fully satisfied with the washing of my bike Bullet 350",
  },
  { author: "Akash Ahluwalia", localGuide: true, relativeTime: "May 2026", text: "Very welcoming and reasonably priced" },
  { author: "Harshitha KM", relativeTime: "Mar 2026", text: "best service and mainly I was satisfied while looking at my bike" },
  { author: "AKASH AGNIHOTRI", localGuide: true, relativeTime: "Mar 2026", text: "Very nice service given" },
  { author: "Vijay Kumar S", localGuide: true, relativeTime: "Mar 2026", text: "Good" },
  {
    author: "Runcy Francis",
    localGuide: true,
    relativeTime: "Feb 2026",
    truncated: true,
    text: "I’ve been trying out different service centers all over Akshaya Nagar, but I finally stopped searching once I tried",
  },
  { author: "Suhas Devaraj", relativeTime: "Dec 2025", text: "Good service" },
  {
    author: "Pukhraj Singh Kang",
    localGuide: true,
    relativeTime: "Nov 2025",
    truncated: true,
    text: "Have been coming here forever now. I have one person (Moni) and who is aware of what to and what not todo. It is always",
  },
  {
    author: "tushar vohra",
    localGuide: true,
    relativeTime: "Oct 2025",
    text: "Good service. The team at SparkX gave full attention to my speed t4 and made it looking like new with their graphene ceramic coating.",
  },
  {
    author: "Akshay Murthy",
    publishedAt: "2025-09-08T12:00:00+05:30",
    truncated: true,
    text: "Absolutely beautiful work .....even before the work started the procedure is top notch ...setting up the paddock stand",
  },
  {
    author: "Sambit Kesori",
    localGuide: true,
    publishedAt: "2025-06-24T12:00:00+05:30",
    text: "Precise care for detail and impeccable customer service. They really understand the importance and value of their clients.",
  },
  {
    author: "Nambi Srinivasan",
    publishedAt: "2025-06-08T12:00:00+05:30",
    truncated: true,
    text: "I must say it is one of the really satisfying places for your car wash. They pay very good attention to detail and",
  },
  {
    author: "Saurabh Agnihotri",
    localGuide: true,
    publishedAt: "2025-05-27T12:00:00+05:30",
    text: "Great experience. Quick in and out. Reasonable price.",
  },
  {
    author: "Vishnu Vardhan",
    publishedAt: "2025-05-08T12:00:00+05:30",
    truncated: true,
    text: "I visited Sparkx to get a sun film installed on my Altroz, and I must say, their attention to detail is top-notch. I",
  },
  {
    author: "shruthi rajagopal",
    publishedAt: "2025-04-26T12:00:00+05:30",
    text: "I recently visited Sparkx. I'm impressed with their work and my experience exceeded the expectations. Got a good quality services and affordable service. Thank you Sparkx",
  },
  {
    author: "Niranjan J",
    localGuide: true,
    publishedAt: "2025-04-26T12:00:00+05:30",
    truncated: true,
    text: "Exceptional service, very satisfied with the car wash. Did nano coating to my car here, turned out really good at",
  },
  {
    author: "Pauly T",
    publishedAt: "2025-04-26T12:00:00+05:30",
    truncated: true,
    text: "Exceptional service! The car wash team did an outstanding job cleaning my vehicle. The attention to detail, friendly",
  },
  { author: "anbarasan Anbu", publishedAt: "2025-04-26T12:00:00+05:30", text: "Very good service 👍🏻" },
  {
    author: "JB Patnaik",
    localGuide: true,
    publishedAt: "2025-04-19T12:00:00+05:30",
    text: "Cars and bikes get rejuvenated with a new look, feel and the personalised friendly service is next to none! The best detailing studio in South Bangalore, highly recommend…",
  },
  {
    author: "Pushpa R",
    localGuide: true,
    publishedAt: "2025-04-10T12:00:00+05:30",
    truncated: true,
    text: "Absolutely impressed with SparkX Auto Detailing! The team was professional, friendly, and paid incredible attention to",
  },
  {
    author: "Jito Tenson",
    localGuide: true,
    publishedAt: "2025-03-21T12:00:00+05:30",
    truncated: true,
    text: "Had my bike washed and polished, and they did it to the core. No corner was left untouched, and given the Himalayan has",
  },
  {
    author: "Lohith J",
    localGuide: true,
    publishedAt: "2025-03-18T12:00:00+05:30",
    text: "I have got my Himalayan 452 ppf and detailing done here. They uses best in class products and explains the process very well. Worth spending money and awesome service",
  },
]

export const manualGoogleReviews: GoogleReviewsData = {
  rating: RATING,
  total: TOTAL,
  mapsUrl: business.mapsUrl,
  source: "manual",
  reviews: reviews.map(({ truncated, rating = 5, ...r }, i) => ({
    ...r,
    id: `manual-${i}`,
    rating,
    text: truncated ? `${r.text.trimEnd()}…` : r.text,
    truncated,
  })),
}
