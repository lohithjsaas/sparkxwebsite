import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Your%20paragraph%20text-GGRhFv9YTEF0GNWR5JcKcm1t5d1B8T.png"
                alt="SparkX Logo"
                width={600}
                height={200}
                className="h-40 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Premium auto detailing services that make your vehicle shine like new. We take pride in our attention to
              detail and quality service.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/sparkxdetailing" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-works" className="text-muted-foreground hover:text-primary">
                  Our Works
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="text-muted-foreground hover:text-primary">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/premium-car-wash" className="text-muted-foreground hover:text-primary">
                  Premium Car Wash & Detailing
                </Link>
              </li>
              <li>
                <Link href="/services/bike-wash" className="text-muted-foreground hover:text-primary">
                  Bike Wash & Detailing
                </Link>
              </li>
              <li>
                <Link href="/services/ppf" className="text-muted-foreground hover:text-primary">
                  Paint Protection Film (PPF)
                </Link>
              </li>
              <li>
                <Link href="/services/ceramic-coating" className="text-muted-foreground hover:text-primary">
                  Ceramic Coating Service
                </Link>
              </li>
              <li>
                <Link href="/services/body-wrapping" className="text-muted-foreground hover:text-primary">
                  Body Wrapping Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Behind Safari Super Market, Akshay Nagar, Begur,      Bengaluru - 560068</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary shrink-0" />
                <a href="tel:+916362613388" className="text-muted-foreground hover:text-primary">
                  +91-6362613388
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary shrink-0" />
                <a href="mailto:info@sparkxdetailing.com" className="text-muted-foreground hover:text-primary">
                  prabhu@sparkx.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SparkX Auto Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}