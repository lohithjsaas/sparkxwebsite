import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/our-works", label: "Our Works" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
  { href: "/book-appointment", label: "Book Appointment" },
]

const serviceLinks = [
  { href: "/services/premium-car-wash", label: "Premium Car Wash & Detailing" },
  { href: "/services/bike-wash", label: "Bike Wash & Detailing" },
  { href: "/services/ppf", label: "Paint Protection Film (PPF)" },
  { href: "/services/ceramic-coating", label: "Ceramic Coating Service" },
  { href: "/services/body-wrapping", label: "Body Wrapping Services" },
]

const linkClass = "text-[14.5px] text-white/60 transition-colors duration-200 hover:text-white"
const headingClass = "eyebrow mb-5"
const socialClass =
  "grid h-10 w-10 place-items-center rounded-full bg-white/[0.05] text-white/70 ring-1 ring-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:ring-brand"

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1600px] px-2 pb-2 sm:px-4 sm:pb-4 lg:px-6">
      <div className="relative overflow-hidden rounded-[24px] bg-card ring-1 ring-white/[0.06] lg:rounded-[28px]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(40% 60% at 100% 0%, rgba(225,37,27,0.12), transparent 70%)" }}
        />
        <div className="relative px-5 py-12 md:px-8 md:py-14 lg:px-10 lg:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-5 sm:col-span-2 lg:col-span-4">
              <Link href="/" className="inline-block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Your%20paragraph%20text-GGRhFv9YTEF0GNWR5JcKcm1t5d1B8T.png"
                  alt="SparkX Logo"
                  width={600}
                  height={200}
                  className="-ml-2 h-28 w-auto md:h-36"
                />
              </Link>
              <p className="max-w-sm text-[14.5px] leading-relaxed text-white/60">
                Premium auto detailing services that make your vehicle shine like new. We take pride in our attention to
                detail and quality service.
              </p>
              <div className="flex gap-2.5">
                <Link href="#" className={socialClass}>
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/sparkxdetailing" className={socialClass}>
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className={headingClass}>Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className={headingClass}>Our Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className={headingClass}>Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="icon-chip !h-9 !w-9">
                    <MapPin className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="text-[14.5px] leading-relaxed text-white/60">
                    Sparkx Detailing-Yelenahalli Main Rd, Akshayanagara West, DLF Newtown, Akshayanagar, Bengaluru,
                    Karnataka 560076
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="icon-chip !h-9 !w-9">
                    <Phone className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <a href="tel:+916362613388" className={linkClass}>
                    +91-6362613388
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="icon-chip !h-9 !w-9">
                    <Mail className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <a href="mailto:prabhu@sparkxdetailing.in" className={`${linkClass} break-all`}>
                    prabhu@sparkxdetailing.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/[0.06] pt-6 text-[13px] text-white/45">
            <p>&copy; {new Date().getFullYear()} SparkX Auto Detailing. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
