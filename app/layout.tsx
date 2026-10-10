import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoadingAnimation } from "@/components/loading-animation";
import { ScrollReveal, SmoothScroll } from "@/components/scroll-reveal";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL, business } from "@/lib/site";
import { siteJsonLd } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const sora = Sora({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SparkX Auto Detailing | PPF & Ceramic Coating in Bengaluru",
    template: `%s | ${business.shortName}`,
  },
  description: business.description,
  applicationName: business.name,
  authors: [{ name: business.name, url: SITE_URL }],
  creator: business.name,
  publisher: business.name,
  category: "Automotive",
  keywords: [
    "car detailing Bengaluru",
    "car detailing Akshayanagar",
    "PPF Bengaluru",
    "paint protection film Bangalore",
    "ceramic coating Bengaluru",
    "graphene coating Bengaluru",
    "car wrapping Bengaluru",
    "bike detailing Bengaluru",
    "car wash near me",
    "car detailing near me",
    "car wash Akshayanagar",
    "car wash Bannerghatta Road",
    "car detailing Bannerghatta Road",
    "SparkX Auto Detailing",
  ],
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: business.name,
    locale: "en_IN",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  other: {
    "geo.region": business.address.regionCode,
    "geo.placename": `${business.address.addressLocality}, ${business.address.addressRegion}`,
    "geo.position": `${business.geo.latitude};${business.geo.longitude}`,
    ICBM: `${business.geo.latitude}, ${business.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

// ✅ Replace with your actual GA4 Measurement ID
const GTM_ID = "GTM-W3GVLVSB"; // Your Google Tag Manager ID
const GA_TRACKING_ID = "G-5BM78LNHYT"; // Your Google Analytics 4 ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="dark">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <JsonLd data={siteJsonLd()} />
        {/* ✅ Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W3GVLVSB');
            `,
          }}
        />

        {/* ✅ Google Analytics (GA4) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-5BM78LNHYT`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5BM78LNHYT', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${sora.variable} font-sans min-h-screen bg-background text-foreground`}>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-W3GVLVSB`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <LoadingAnimation />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SmoothScroll />
        <ScrollReveal />
        <Analytics />
      </body>
    </html>
  );
}
