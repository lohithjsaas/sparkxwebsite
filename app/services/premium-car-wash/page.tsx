import Image from "next/image"
import { LoopVideo } from "@/components/loop-video"
import Link from "next/link"
import { ArrowRight, Check, Shield, Clock, Award } from "lucide-react"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { getService } from "@/lib/site"
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo"

const service = getService("premium-car-wash")

export const metadata: Metadata = pageMetadata({
  title: service.title,
  description: service.description,
  path: service.path,
  keywords: service.keywords,
  image: service.image,
})

export default function PremiumCarWashPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <JsonLd data={[serviceJsonLd(service), breadcrumbJsonLd([{ name: service.name, path: service.path }])]} />
      <div className="container">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 md:mb-28">
          <div>
            <h1 className="hero-rise font-display text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.035em] font-semibold mb-6">Premium Car Wash & Detailing</h1>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60 mb-8">
              Experience the ultimate in car care with our premium wash and detailing services. We use only the highest
              quality products and techniques to ensure your vehicle looks its absolute best.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/book-appointment"
                className="btn-primary group"
              >
                Book Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="btn-outline"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[560px]">
            <LoopVideo
              src="/videos/sparkx-premium-car-wash-bengaluru.mp4"
              poster="/images/sparkx-premium-car-wash-bengaluru-poster.jpg"
              label="SparkX team foam-washing a blue Mini Cooper at the SparkX car wash studio in Akshayanagar, Bengaluru"
              className="aspect-square w-full rounded-[20px] object-cover ring-1 ring-white/[0.06] md:rounded-[24px]"
            />
            <div className="absolute bottom-4 left-4 md:left-auto md:right-5 md:bottom-5 rounded-full bg-primary text-primary-foreground px-5 py-3 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.8)]">
              <p className="text-lg font-semibold">Professional Service</p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Our Premium Car Wash & Detailing Service</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              We offer comprehensive car wash and detailing services that go beyond the surface to restore your
              vehicle's showroom shine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="card-surface p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-4">Exterior Detailing</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Our exterior detailing service includes a thorough wash, clay bar treatment, polishing, and waxing to
                protect your vehicle's paint and restore its shine.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Hand wash with premium cleaning agents</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Clay bar treatment to remove contaminants</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Machine polishing to remove swirl marks and scratches</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>High-quality wax application for protection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Tire and wheel cleaning and dressing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Exterior glass cleaning and treatment</span>
                </li>
              </ul>
            </div>

            <div className="card-surface p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-4">Interior Detailing</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Our interior detailing service includes a deep clean of all interior surfaces, vacuuming, steam
                cleaning, and conditioning to restore your vehicle's interior.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Thorough vacuuming of all surfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Steam cleaning of carpets and upholstery</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Leather cleaning and conditioning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Dashboard and console cleaning and protection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Interior glass cleaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Air vent cleaning and sanitizing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Our Detailing Packages</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">Choose the package that best suits your needs and budget.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="card-surface overflow-hidden">
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3">Basic Wash</h3>
                <div className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">₹999</div>
                <p className="text-white/60 leading-relaxed mb-6">Perfect for regular maintenance and quick refreshes.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Exterior hand wash</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Tire and wheel cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Interior vacuuming</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Dashboard wipe down</span>
                  </li>
                </ul>
                <Link
                  href="/book-appointment"
                  className="btn-primary w-full"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="card-surface overflow-hidden relative">
              <div className="absolute top-4 right-4 rounded-full bg-brand text-white px-3 py-1 text-xs font-semibold shadow-[0_8px_20px_-8px_rgba(225,37,27,0.8)]">
                Most Popular
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3">Premium Detail</h3>
                <div className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">₹2,499</div>
                <p className="text-white/60 leading-relaxed mb-6">Comprehensive detailing for vehicles needing extra care.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Everything in Basic Wash</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Clay bar treatment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>One-step polish</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Wax application</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Interior deep cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Leather conditioning</span>
                  </li>
                </ul>
                <Link
                  href="/book-appointment"
                  className="btn-primary w-full"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="card-surface overflow-hidden">
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3">Ultimate Detail</h3>
                <div className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">₹4,999</div>
                <p className="text-white/60 leading-relaxed mb-6">The ultimate in car care for those who want perfection.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Everything in Premium Detail</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Multi-stage paint correction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Premium sealant application</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Engine bay cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Headlight restoration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Complete interior rejuvenation</span>
                  </li>
                </ul>
                <Link
                  href="/book-appointment"
                  className="btn-primary w-full"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Why Choose Our Detailing Service</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              We take pride in providing the highest quality car detailing services in the area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="card-surface p-6 md:p-8 text-center">
              <Shield className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Premium Products</h3>
              <p className="text-white/60 leading-relaxed">
                We use only the highest quality, professional-grade products that are safe for your vehicle and the
                environment.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8 text-center">
              <Award className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Experienced Team</h3>
              <p className="text-white/60 leading-relaxed">
                Our detailers are trained professionals with years of experience in the auto detailing industry.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8 text-center">
              <Clock className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Attention to Detail</h3>
              <p className="text-white/60 leading-relaxed">
                We pay attention to every detail, ensuring your vehicle receives the care and attention it deserves.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div data-reveal className="card-surface p-6 md:p-10 lg:p-12 md:hover:translate-y-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Ready to Transform Your Vehicle?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Book your premium car wash and detailing appointment today and experience the SparkX difference. Our
                team is ready to make your vehicle shine like new.
              </p>
              <Link
                href="/book-appointment"
                className="btn-primary group"
              >
                Book Your Appointment
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800&auto=format&fit=crop"
                alt="Car Detailing Results"
                width={800}
                height={500}
                className="rounded-[20px] md:rounded-[24px] w-full ring-1 ring-white/[0.06]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}