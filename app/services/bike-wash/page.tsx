import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Shield, Clock, Award } from "lucide-react"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { getService } from "@/lib/site"
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo"

const service = getService("bike-wash")

export const metadata: Metadata = pageMetadata({
  title: service.title,
  description: service.description,
  path: service.path,
  keywords: service.keywords,
  image: service.image,
})

export default function BikeWashPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <JsonLd data={[serviceJsonLd(service), breadcrumbJsonLd([{ name: service.name, path: service.path }])]} />
      <div className="container">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 md:mb-28">
          <div>
            <h1 className="hero-rise font-display text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.035em] font-semibold mb-6">Bike Wash & Detailing</h1>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60 mb-8">
              Give your motorcycle the care it deserves with our specialized bike wash and detailing services. We
              understand the unique needs of motorcycles and provide meticulous attention to every component.
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
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1200&auto=format&fit=crop"
              alt="Bike Wash & Detailing"
              width={1200}
              height={800}
              className="rounded-[20px] md:rounded-[24px] w-full ring-1 ring-white/[0.06]"
            />
            <div className="absolute bottom-4 left-4 md:left-auto md:right-5 md:bottom-5 rounded-full bg-primary text-primary-foreground px-5 py-3 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.8)]">
              <p className="text-lg font-semibold">Specialized Service</p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Our Bike Wash & Detailing Service</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              We offer comprehensive motorcycle cleaning and detailing services that are specifically designed for
              two-wheelers of all types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="card-surface p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-4">Exterior Cleaning</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Our exterior cleaning service includes a thorough wash, degreasing, polishing, and protection to keep
                your bike looking its best.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Hand wash with motorcycle-specific cleaners</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Engine and chain degreasing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Chrome and metal polishing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Paint protection application</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Wheel and tire cleaning and dressing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Exhaust cleaning and polishing</span>
                </li>
              </ul>
            </div>

            <div className="card-surface p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-4">Mechanical Care</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Our mechanical care service includes attention to the functional components of your motorcycle to ensure
                it not only looks great but performs well too.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Chain cleaning and lubrication</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Brake dust removal</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Detailed cleaning of hard-to-reach areas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Seat cleaning and conditioning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Instrument panel cleaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Basic inspection of key components</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Our Bike Detailing Packages</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">Choose the package that best suits your motorcycle's needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="card-surface overflow-hidden">
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3">Basic Wash</h3>
                <div className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">₹699</div>
                <p className="text-white/60 leading-relaxed mb-6">Quick refresh for your motorcycle.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Exterior hand wash</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Chain degreasing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Wheel cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Basic polish</span>
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
                <div className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">₹1,499</div>
                <p className="text-white/60 leading-relaxed mb-6">Comprehensive care for your motorcycle.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Everything in Basic Wash</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Engine degreasing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Chrome polishing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Paint protection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Chain lubrication</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Seat conditioning</span>
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
                <div className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">₹2,999</div>
                <p className="text-white/60 leading-relaxed mb-6">The ultimate in motorcycle care.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Everything in Premium Detail</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Exhaust restoration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Detailed paint correction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Premium ceramic coating</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Complete mechanical inspection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Headlight restoration</span>
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
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Why Choose Our Bike Detailing Service</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              We understand motorcycles and provide specialized care that regular car wash services can't match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="card-surface p-6 md:p-8 text-center">
              <Shield className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Motorcycle Specialists</h3>
              <p className="text-white/60 leading-relaxed">
                Our team specializes in motorcycles and understands the unique cleaning and maintenance requirements of
                different bike types.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8 text-center">
              <Award className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Safe Techniques</h3>
              <p className="text-white/60 leading-relaxed">
                We use techniques and products that are safe for all motorcycle components, including sensitive
                electronics and finishes.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8 text-center">
              <Clock className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Attention to Detail</h3>
              <p className="text-white/60 leading-relaxed">
                We pay attention to every nook and cranny, ensuring your bike receives the meticulous care it deserves.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div data-reveal className="card-surface p-6 md:p-10 lg:p-12 md:hover:translate-y-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Ready to Make Your Bike Shine?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Book your bike wash and detailing appointment today and experience the SparkX difference. Our team is
                ready to give your motorcycle the care it deserves.
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
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop"
                alt="Motorcycle Detailing Results"
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