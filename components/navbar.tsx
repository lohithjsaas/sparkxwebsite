"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 navbar-integrated ${scrolled ? "scrolled" : ""}`}>
      <div className="w-full px-8 md:px-16 flex h-32 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Your%20paragraph%20text-GGRhFv9YTEF0GNWR5JcKcm1t5d1B8T.png"
            alt="SparkX Logo"
            width={600}
            height={200}
            className="h-28 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary text-white">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className="flex items-center space-x-1 transition-colors hover:text-primary text-white"
              onClick={toggleServices}
            >
              <span>Our Services</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute left-0 mt-2 w-64 rounded-md bg-card shadow-lg service-dropdown ${isServicesOpen ? "open" : ""}`}
            >
              <div className="py-2">
                <Link
                  href="/services/premium-car-wash"
                  className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground service-item"
                >
                  Premium Car Wash & Detailing
                </Link>
                <Link
                  href="/services/bike-wash"
                  className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground service-item"
                >
                  Bike Wash & Detailing
                </Link>
                <Link
                  href="/services/ppf"
                  className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground service-item"
                >
                  Paint Protection Film (PPF)
                </Link>
                <Link
                  href="/services/ceramic-coating"
                  className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground service-item"
                >
                  Ceramic Coating Service
                </Link>
                <Link
                  href="/services/body-wrapping"
                  className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground service-item"
                >
                  Body Wrapping Services
                </Link>
              </div>
            </div>
          </div>

          <Link href="/our-works" className="transition-colors hover:text-primary text-white">
            Our Works
          </Link>

          <Link href="/testimonials" className="transition-colors hover:text-primary text-white">
            Testimonials
          </Link>

          <Link href="/contact" className="transition-colors hover:text-primary text-white">
            Contact
          </Link>

          <Link
            href="/book-appointment"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Book Appointment
          </Link>
        </nav>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container py-4 space-y-4">
            <Link
              href="/"
              className="block py-2 transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                className="flex items-center justify-between w-full py-2 transition-colors hover:text-primary"
                onClick={toggleServices}
              >
                <span>Our Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`service-dropdown ${isServicesOpen ? "open" : ""}`}>
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/services/premium-car-wash"
                    className="block py-2 transition-colors hover:text-primary service-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Premium Car Wash & Detailing
                  </Link>
                  <Link
                    href="/services/bike-wash"
                    className="block py-2 transition-colors hover:text-primary service-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Bike Wash & Detailing
                  </Link>
                  <Link
                    href="/services/ppf"
                    className="block py-2 transition-colors hover:text-primary service-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Paint Protection Film (PPF)
                  </Link>
                  <Link
                    href="/services/ceramic-coating"
                    className="block py-2 transition-colors hover:text-primary service-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ceramic Coating Service
                  </Link>
                  <Link
                    href="/services/body-wrapping"
                    className="block py-2 transition-colors hover:text-primary service-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Body Wrapping Services
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/our-works"
              className="block py-2 transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Works
            </Link>

            <Link
              href="/testimonials"
              className="block py-2 transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>

            <Link
              href="/contact"
              className="block py-2 transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/book-appointment"
              className="block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}