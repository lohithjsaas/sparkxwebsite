"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Clock, Award, Sparkles, Car, MessageCircle, Droplets } from "lucide-react"
import { useState, useRef, useEffect, useLayoutEffect } from "react"
import gsap from "gsap"
import { LOADER_DURATION_MS, hasLoaderFinished } from "@/components/loading-animation"
import { InstagramReels } from "@/components/instagram-reels"
import { LoopVideo } from "@/components/loop-video"
import type { InstagramReel } from "@/lib/instagram"
import { GoogleReviewsSection, RatingBadge } from "@/components/google-reviews"
import type { GoogleReviewsData } from "@/lib/google-reviews"
import { business } from "@/lib/site"

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    text: "We use only the highest quality products and techniques to ensure your vehicle gets the best treatment possible.",
  },
  {
    icon: Clock,
    title: "Efficient Service",
    text: "Our experienced team works efficiently to deliver exceptional results without keeping you waiting.",
  },
  {
    icon: Award,
    title: "Experienced Team",
    text: "Our detailers are trained professionals with years of experience in the auto detailing industry.",
  },
]

const services = [
  {
    icon: Car,
    title: "Premium Car Wash & Detailing",
    text: "Comprehensive cleaning and detailing for your car, inside and out.",
    href: "/services/premium-car-wash",
    image: "/images/sparkx-premium-car-wash-bengaluru-poster.jpg",
    video: "/videos/sparkx-premium-car-wash-bengaluru.mp4",
  },
  {
    icon: Sparkles,
    title: "Bike Wash & Detailing",
    text: "Expert cleaning and detailing services for motorcycles of all types.",
    href: "/services/bike-wash",
    image: "/images/sparkx-bike-wash-bengaluru-poster.jpg",
    video: "/videos/sparkx-bike-wash-bengaluru.mp4",
  },
  {
    icon: Shield,
    title: "Ceramic Coating Service",
    text: "Long-lasting protection for your vehicle's paint with ceramic coating.",
    href: "/services/ceramic-coating",
    image: "/images/sparkx-ceramic-coating-bengaluru-poster.jpg",
    video: "/videos/sparkx-ceramic-coating-bengaluru.mp4",
  },
  {
    icon: Droplets,
    title: "Steam Cleaning",
    text: "Chemical-free interior steam cleaning that deep-cleans, sanitises and deodorises your cabin.",
    href: "/services/steam-cleaning",
    image: "/images/sparkx-steam-cleaning-bengaluru-poster.jpg",
    video: "/videos/sparkx-steam-cleaning-bengaluru.mp4",
  },
]

function SectionHeader({ title, text }: { title: string; text: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <h2 className="font-display text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[44px] lg:text-[52px]">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-[46ch] text-[15px] leading-relaxed text-white/60 md:text-[17px]">{text}</p>
    </div>
  )
}

export function HomePage({
  reels,
  googleReviews,
}: {
  reels: InstagramReel[]
  googleReviews: GoogleReviewsData
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const touching = useRef(false)

  useEffect(() => {
    if (heroRef.current) {
      setDimensions({
        width: heroRef.current.offsetWidth,
        height: heroRef.current.offsetHeight,
      })
    }

    const handleResize = () => {
      if (heroRef.current) {
        setDimensions({
          width: heroRef.current.offsetWidth,
          height: heroRef.current.offsetHeight,
        })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Touch screens have no hover, so the spotlight drifts across the car on its own
  // (and follows the finger while the hero is being touched).
  useEffect(() => {
    if (!window.matchMedia("(pointer: coarse)").matches) return
    setIsTouch(true)
    setIsHovering(true)
    let frame = 0
    const start = performance.now()
    const drift = (now: number) => {
      const el = heroRef.current
      if (el && !touching.current) {
        const t = (now - start) / 1000
        setMousePosition({
          x: el.offsetWidth * (0.5 + 0.32 * Math.sin(t * 0.5)),
          y: el.offsetHeight * (0.34 + 0.1 * Math.sin(t * 0.8 + 1)),
        })
      }
      frame = requestAnimationFrame(drift)
    }
    frame = requestAnimationFrame(drift)
    return () => cancelAnimationFrame(frame)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    if (heroRef.current && touch) {
      touching.current = true
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({ x: touch.clientX - rect.left, y: touch.clientY - rect.top })
    }
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    if (!isTouch) setIsHovering(false)
  }

  // Hero intro timeline (waits for the loading screen on first visit).
  useLayoutEffect(() => {
    const el = heroRef.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const delay = hasLoaderFinished() ? 0.1 : LOADER_DURATION_MS / 1000
    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 0, scale: 0.97 })
      gsap.set("[data-hero='headline']", { opacity: 0, y: 70 })
      gsap.set("[data-hero='subheadline']", { opacity: 0, y: 50 })
      gsap.set("[data-hero='cta']", { opacity: 0, y: 30, scale: 0.96 })
      gsap
        .timeline({ defaults: { ease: "power3.out" }, delay })
        .to(el, { opacity: 1, scale: 1, duration: 1.15, clearProps: "transform" }, 0)
        .to("[data-hero='headline']", { opacity: 1, y: 0, duration: 1.1, ease: "expo.out" }, 0.25)
        .to("[data-hero='subheadline']", { opacity: 1, y: 0, duration: 0.9 }, "-=0.7")
        .to("[data-hero='cta']", { opacity: 1, y: 0, scale: 1, duration: 0.85, stagger: 0.1 }, "-=0.55")
    }, el)
    return () => ctx.revert()
  }, [])

  // Calculate spotlight position - exact pixel values for precise positioning
  const spotlightX = mousePosition.x
  const spotlightY = mousePosition.y
  const spotlightRadius = isTouch ? Math.max(180, dimensions.width * 0.45) : 400

  return (
    <div>
      {/* Hero Section with Static Image and Reveal Effect */}
      <section className="mx-auto w-full max-w-[1600px] px-2 pt-2 sm:px-4 lg:px-6 lg:pt-4">
        <div
          ref={heroRef}
          data-hero="frame"
          className="relative w-full overflow-hidden rounded-[24px] bg-black ring-1 ring-white/[0.06] lg:rounded-[28px]"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => (touching.current = false)}
        >
          {/* Hero image - fully visible */}
          {/* On phones the whole car is fitted to the frame width (no cropping) and sits behind the title */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <div className="w-full h-full relative">
              <Image
                src="/ferrari.jpg"
                alt="Car being detailed at the SparkX Auto Detailing studio in Akshayanagar, Bengaluru"
                fill
                priority
                sizes="100vw"
                className="object-contain object-[center_22%] md:object-cover md:object-center"
              />
            </div>
          </div>

          {/* Reveal mask - dark overlay with a hole where the cursor is */}
          <div
            className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovering ? 1 : 0,
              background: `radial-gradient(circle ${spotlightRadius}px at ${spotlightX}px ${spotlightY}px, transparent 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.85) 100%)`,
            }}
          />

          {/* Dark overlay - covers the entire image when not hovering */}
          <div
            className="absolute inset-0 bg-black/85 z-5 transition-opacity duration-500"
            style={{ opacity: isHovering ? 0 : 1 }}
          />

          {/* Legibility gradient behind the copy + faint red glow */}
          <div className="pointer-events-none absolute inset-0 z-10 hidden md:block md:bg-gradient-to-r md:from-black/75 md:via-black/20 md:to-transparent" />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{ background: "radial-gradient(60% 50% at 15% 100%, rgba(225,37,27,0.18), transparent 70%)" }}
          />

          <div className="relative z-20 flex w-full flex-col justify-start px-5 pb-10 pt-[112px] sm:px-8 sm:pt-32 md:min-h-[calc(100svh-32px)] md:justify-center md:pb-16 lg:px-12">
            <div className="max-w-[640px]">
              <h1
                data-hero="headline"
                className="font-display text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)] sm:text-[56px] lg:text-[72px] xl:text-[80px]"
              >
                Premium Car Wash & Detailing in Bengaluru
              </h1>
              <p
                data-hero="subheadline"
                className="mt-4 max-w-[42ch] text-[15px] leading-[1.55] text-white/70 sm:mt-5 sm:text-[16px] lg:text-[18px]"
              >
                Car wash, detailing, PPF and ceramic coating at our Akshayanagar studio, minutes from Bannerghatta
                Road. Trusted by car and bike owners across South Bengaluru.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
                <div data-hero="cta" className="flex">
                  <Link href="/book-appointment" className="btn-primary group w-full sm:w-auto">
                    Book Appointment
                    <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
                <div data-hero="cta" className="flex">
                  <Link href="/our-works" className="btn-outline w-full sm:w-auto">
                    View Our Work
                  </Link>
                </div>
              </div>
              <div data-hero="cta" className="mt-6 flex justify-center sm:justify-start">
                <RatingBadge data={googleReviews} />
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/916362613388"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-40 flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-[0_14px_30px_-10px_rgba(34,197,94,0.6)] transition-transform duration-300 hover:scale-110 active:scale-95 md:bottom-6 md:right-6"
          style={{ marginBottom: "env(safe-area-inset-bottom)" }}
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </section>

      {/* Instagram Reels */}
      {reels.length > 0 && (
        <section className="mx-auto w-full max-w-[1600px] pt-20 md:pt-28 lg:pt-32">
          <div className="px-4 md:px-6 lg:px-8">
            <SectionHeader
              title="Our Works"
              text="Take a look at some of our recent detailing projects and see the SparkX difference."
            />
          </div>
          <InstagramReels reels={reels} size="compact" />
          <div className="mt-8 flex justify-center px-4">
            <Link href="/our-works" className="btn-outline group w-full sm:w-auto">
              View Our Work
              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      )}

      {/* Google Reviews */}
      {googleReviews.reviews.length > 0 && <GoogleReviewsSection data={googleReviews} />}

      {/* Features Section */}
      <section className="mx-auto w-full max-w-[1600px] px-4 pt-20 pb-6 md:px-10 md:pt-28 lg:px-12 lg:pt-32">
        <SectionHeader
          title="Why Choose SparkX?"
          text="We deliver exceptional auto detailing services with attention to detail and customer satisfaction as our top priorities."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card-surface flex h-full flex-col p-6 lg:p-8">
              <div className="icon-chip">
                <Icon strokeWidth={1.6} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-[18px] font-semibold tracking-tight lg:text-[20px]">{title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-white/60 lg:text-[15px]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="mx-auto w-full max-w-[1600px] px-4 pt-20 md:px-10 md:pt-28 lg:px-12 lg:pt-32">
        <SectionHeader
          title="Our Services"
          text="We offer a wide range of auto detailing services to keep your vehicle looking its best."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6">
          {services.map(({ icon: Icon, title, text, href, image, video }) => (
            <Link key={href} href={href} className="card-surface group flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                {video ? (
                  <LoopVideo
                    src={video}
                    poster={image}
                    label={title}
                    data-parallax="10"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={600}
                    data-parallax="10"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6 pt-2 lg:p-7 lg:pt-3">
                <div className="icon-chip -mt-8 relative bg-card">
                  <Icon strokeWidth={1.6} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-[18px] font-semibold tracking-tight lg:text-[20px]">{title}</h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-white/60">{text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-display text-[14px] font-semibold text-white">
                  Learn More
                  <ArrowRight className="h-4 w-4 text-brand transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Areas we serve — local search signal for "car wash / car detailing near me" */}
      <section className="mx-auto w-full max-w-[1600px] px-4 pt-20 md:px-10 md:pt-28 lg:px-12 lg:pt-32">
        <SectionHeader
          title="Car Wash & Detailing Near You"
          text="Our studio is on Yelenahalli Main Road in Akshayanagar, South Bengaluru. Car and bike owners drive in from these neighbourhoods for a wash, detailing, PPF or ceramic coating."
        />
        <ul className="flex flex-wrap justify-center gap-2.5 md:gap-3">
          {business.areaServed
            .filter((area) => area !== "Bengaluru")
            .map((area) => (
              <li
                key={area}
                className="rounded-full bg-white/[0.04] px-4 py-2 text-[14px] text-white/75 ring-1 ring-white/[0.08]"
              >
                {area}
              </li>
            ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-center text-[14.5px] leading-relaxed text-white/50">
          Open {business.hoursText}.{" "}
          <Link href="/contact" className="text-white/80 underline-offset-4 hover:underline">
            Get directions
          </Link>{" "}
          or call{" "}
          <a href={`tel:${business.phoneE164}`} className="text-white/80 underline-offset-4 hover:underline">
            {business.phone}
          </a>
          .
        </p>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-[1600px] px-4 pt-20 md:px-10 md:pt-28 lg:px-12 lg:pt-32 pb-20 md:pb-28 lg:pb-32">
        <div className="card-surface relative grid grid-cols-1 items-center gap-8 overflow-hidden p-6 md:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14 md:hover:translate-y-0">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(50% 70% at 0% 0%, rgba(225,37,27,0.16), transparent 70%)" }}
          />
          <div className="relative lg:col-span-6">
            <h2 className="font-display text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[44px] lg:text-[52px]">
              Ready to Book Your Appointment?
            </h2>
            <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-white/60 md:text-[17px]">
              Schedule your auto detailing appointment today and experience the SparkX difference. Our team is ready
              to make your vehicle shine like new.
            </p>
            <Link href="/book-appointment" className="btn-primary group mt-8 w-full sm:w-auto">
              Book Now
              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-[18px] md:rounded-[22px]">
              <Image
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800&auto=format&fit=crop"
                alt="Car Detailing"
                width={800}
                height={600}
                data-parallax="8"
                className="w-full"
              />
            </div>
            <div className="pill absolute bottom-4 left-4 bg-black/60 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="font-display font-semibold">100% Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
