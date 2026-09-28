"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"

const services = [
  { href: "/services/premium-car-wash", label: "Premium Car Wash & Detailing" },
  { href: "/services/bike-wash", label: "Bike Wash & Detailing" },
  { href: "/services/ppf", label: "Paint Protection Film (PPF)" },
  { href: "/services/ceramic-coating", label: "Ceramic Coating Service" },
  { href: "/services/body-wrapping", label: "Body Wrapping Services" },
  { href: "/services/steam-cleaning", label: "Steam Cleaning" },
]

const links = [
  { href: "/our-works", label: "Our Works" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`group relative text-[14px] tracking-tight transition-colors ${
        active ? "font-semibold text-white" : "text-white/70 hover:text-white"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-1.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-brand transition-all duration-300 ${
          active ? "w-5 opacity-100" : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-70"
        }`}
      />
    </Link>
  )
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 w-full">
      {/* Wrapper ignores taps so the (hidden) mobile menu never blocks the page beneath it */}
      <div className="pointer-events-none mx-auto w-full max-w-[1600px] px-2 pt-2 sm:px-4 lg:px-6 lg:pt-4">
        <header
          className={`pointer-events-auto relative flex items-center justify-between gap-6 rounded-[20px] px-3 py-1.5 ring-1 backdrop-blur-xl transition-all duration-500 sm:px-5 lg:gap-10 lg:rounded-[24px] lg:px-8 ${
            scrolled || isMenuOpen
              ? "bg-[#111]/80 ring-white/[0.08] shadow-[0_2px_6px_rgba(0,0,0,0.3),0_18px_40px_-22px_rgba(0,0,0,0.9)]"
              : "bg-black/30 ring-white/[0.06]"
          }`}
        >
          <Link href="/" aria-label="SparkX — home" className="flex shrink-0 items-center transition-opacity hover:opacity-90">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Your%20paragraph%20text-GGRhFv9YTEF0GNWR5JcKcm1t5d1B8T.png"
              alt="SparkX Logo"
              width={800}
              height={200}
              className="-my-3 h-[76px] w-auto sm:h-20 lg:-my-4 lg:h-24"
              priority
            />
          </Link>

          <div className="flex flex-1 items-center justify-end gap-7 xl:gap-10">
            <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex xl:gap-9">
              <NavLink href="/" active={isActive("/")}>
                Home
              </NavLink>

              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`group relative flex items-center gap-1 text-[14px] tracking-tight transition-colors ${
                    isActive("/services") ? "font-semibold text-white" : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  aria-expanded={isServicesOpen}
                >
                  <span>Our Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <div
                  className={`absolute left-1/2 top-full -translate-x-1/2 pt-5 transition-all duration-300 ${
                    isServicesOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2"
                  }`}
                >
                  <div className="w-80 rounded-[20px] bg-[#111]/95 p-2 ring-1 ring-white/[0.08] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="group flex items-center justify-between rounded-xl px-4 py-3 text-[14px] text-white/75 transition-colors hover:bg-white/[0.05] hover:text-white"
                      >
                        {s.label}
                        <ArrowRight className="h-4 w-4 -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {links.map((l) => (
                <NavLink key={l.href} href={l.href} active={isActive(l.href)}>
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <div className="dock-rotating-stroke hidden shrink-0 rounded-full sm:block">
              <Link
                href="/book-appointment"
                className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-display text-[13.5px] font-semibold tracking-tight text-primary-foreground transition-transform duration-200 ease-out hover:-translate-y-[1px] active:scale-[0.97]"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              className="grid h-11 w-11 place-items-center rounded-full bg-white/[0.06] text-white ring-1 ring-white/10 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </header>

        {/* Mobile menu */}
        <div
          data-lenis-prevent
          className={`lg:hidden mt-2 overflow-y-auto overscroll-contain rounded-[24px] bg-[#111]/95 ring-1 ring-white/[0.08] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-300 ease-out max-h-[calc(100svh-100px)] ${
            isMenuOpen ? "pointer-events-auto visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-3 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col p-3">
            <Link
              href="/"
              className={`rounded-xl px-4 py-3.5 font-display text-[17px] font-medium ${isActive("/") ? "bg-white/[0.05] text-white" : "text-white/80"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <button
              className="flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-[17px] font-medium text-white/80"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              aria-expanded={isServicesOpen}
            >
              <span>Our Services</span>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`service-dropdown ${isServicesOpen ? "open" : ""}`}>
              <div>
                <div className="mx-2 mb-2 rounded-2xl bg-white/[0.03] p-1.5 ring-1 ring-white/[0.05]">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] text-white/70 active:bg-white/[0.05]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {s.label}
                      <ArrowRight className="h-4 w-4 text-brand" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-xl px-4 py-3.5 font-display text-[17px] font-medium ${isActive(l.href) ? "bg-white/[0.05] text-white" : "text-white/80"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pb-5 pt-1">
            <Link href="/book-appointment" className="btn-primary w-full" onClick={() => setIsMenuOpen(false)}>
              Book Appointment
              <ArrowRight className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
