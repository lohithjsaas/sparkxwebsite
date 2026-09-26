import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Award, Clock, Shield } from "lucide-react"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { getService } from "@/lib/site"
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo"

const service = getService("body-wrapping")

export const metadata: Metadata = pageMetadata({
  title: service.title,
  description: service.description,
  path: service.path,
  keywords: service.keywords,
  image: service.image,
})

export default function BodyWrappingPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <JsonLd data={[serviceJsonLd(service), breadcrumbJsonLd([{ name: service.name, path: service.path }])]} />
      <div className="container">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 md:mb-28">
          <div>
            <h1 className="hero-rise font-display text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.035em] font-semibold mb-6">Body Wrapping Services</h1>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60 mb-8">
              Transform your vehicle's appearance with our premium vinyl wrapping services. From color changes to custom
              designs, our expert installers deliver flawless results that protect your original paint while giving your
              vehicle a unique look.
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
              src="https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?q=80&w=1200&auto=format&fit=crop"
              alt="Vehicle Vinyl Wrapping"
              width={1200}
              height={800}
              className="rounded-[20px] md:rounded-[24px] w-full ring-1 ring-white/[0.06]"
            />
            <div className="absolute bottom-4 left-4 md:left-auto md:right-5 md:bottom-5 rounded-full bg-primary text-primary-foreground px-5 py-3 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.8)]">
              <p className="text-lg font-semibold">Transform Your Look</p>
            </div>
          </div>
        </div>

        {/* What is Vehicle Wrapping */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">What is Vehicle Wrapping?</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              Vehicle wrapping involves applying large vinyl sheets to your vehicle's exterior, allowing you to change
              its color or add custom designs without permanent changes to the original paint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Benefits of Vehicle Wrapping</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Protects your vehicle's original paint</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Completely reversible - can be removed without damage</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Endless color and finish options (matte, gloss, satin, metallic)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Custom designs and graphics available</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>More cost-effective than a quality paint job</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Typically lasts 5-7 years with proper care</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Helps maintain resale value by preserving original paint</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop"
                alt="Vehicle Wrap Benefits"
                width={800}
                height={600}
                className="rounded-[20px] md:rounded-[24px] w-full ring-1 ring-white/[0.06]"
              />
            </div>
          </div>
        </div>

        {/* Our Wrapping Process */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Our Wrapping Process</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              We follow a meticulous process to ensure your vehicle wrap is applied perfectly and lasts for years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="card-surface p-6 md:p-8">
              <div className="icon-chip mb-5">
                <span className="text-brand font-display font-semibold text-2xl">1</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Consultation & Design</h3>
              <p className="text-white/60 leading-relaxed">
                We discuss your vision, recommend materials, and create digital mockups to visualize the final result
                before proceeding.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <div className="icon-chip mb-5">
                <span className="text-brand font-display font-semibold text-2xl">2</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Vehicle Preparation</h3>
              <p className="text-white/60 leading-relaxed">
                We thoroughly clean, clay bar, and decontaminate your vehicle to ensure the wrap adheres properly and
                lasts longer.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <div className="icon-chip mb-5">
                <span className="text-brand font-display font-semibold text-2xl">3</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Disassembly</h3>
              <p className="text-white/60 leading-relaxed">
                We remove necessary parts like door handles, emblems, and trim pieces to ensure a seamless wrap with no
                visible edges.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <div className="icon-chip mb-5">
                <span className="text-brand font-display font-semibold text-2xl">4</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Vinyl Application</h3>
              <p className="text-white/60 leading-relaxed">
                Our skilled technicians carefully apply the vinyl, using heat and specialized tools to conform to your
                vehicle's contours.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <div className="icon-chip mb-5">
                <span className="text-brand font-display font-semibold text-2xl">5</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Trimming & Finishing</h3>
              <p className="text-white/60 leading-relaxed">
                We precisely trim the vinyl around edges, panel gaps, and features, then use heat to ensure proper
                adhesion in complex areas.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <div className="icon-chip mb-5">
                <span className="text-brand font-display font-semibold text-2xl">6</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Reassembly & Inspection</h3>
              <p className="text-white/60 leading-relaxed">
                We reinstall all removed parts and perform a detailed inspection to ensure perfect application before
                delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Wrapping Options */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Our Wrapping Options</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              We offer a wide range of vinyl options to suit your style and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="card-surface overflow-hidden">
              <div className="aspect-square bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Color Change Wraps</h3>
                <p className="text-sm text-muted-foreground">
                  Transform your vehicle with a complete color change in gloss, matte, or satin finishes.
                </p>
              </div>
            </div>

            <div className="card-surface overflow-hidden">
              <div className="aspect-square bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Chrome & Metallic Wraps</h3>
                <p className="text-sm text-muted-foreground">
                  Make a bold statement with eye-catching chrome or metallic finish wraps.
                </p>
              </div>
            </div>

            <div className="card-surface overflow-hidden">
              <div className="aspect-square bg-gradient-to-r from-green-500 to-blue-500"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Color Shift Wraps</h3>
                <p className="text-sm text-muted-foreground">
                  Create a dynamic look with color-shifting vinyl that changes hue depending on the viewing angle.
                </p>
              </div>
            </div>

            <div className="card-surface overflow-hidden">
              <div className="aspect-square bg-gradient-to-r from-yellow-500 to-red-500"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Custom Designs</h3>
                <p className="text-sm text-muted-foreground">
                  Create a unique look with custom graphics, patterns, or branding for personal or business vehicles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Our Wrapping Packages</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">Choose the coverage that best suits your needs and budget.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="card-surface overflow-hidden">
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3">Partial Wrap</h3>
                <div className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">₹30,000+</div>
                <p className="text-white/60 leading-relaxed mb-6">Accent specific areas of your vehicle.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Hood wrap</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Roof wrap</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Mirror caps</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Accent stripes</span>
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
                <h3 className="font-display text-xl font-semibold mb-3">Full Wrap</h3>
                <div className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">₹80,000+</div>
                <p className="text-white/60 leading-relaxed mb-6">Complete color change for your vehicle.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Complete exterior wrap</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Door jambs (optional)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Premium vinyl materials</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>5+ year durability</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Complete paint protection</span>
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
                <h3 className="font-display text-xl font-semibold mb-3">Custom Design Wrap</h3>
                <div className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">₹120,000+</div>
                <p className="text-white/60 leading-relaxed mb-6">Unique custom designs and graphics.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Custom design creation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Full vehicle coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Premium printed vinyl</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Protective overlaminate</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Digital mockups included</span>
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
          <p className="text-sm text-muted-foreground text-center mt-4">
            *Prices vary based on vehicle size, wrap material, and complexity. Contact us for a precise quote.
          </p>
        </div>

        {/* Why Choose Us */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Why Choose Our Wrapping Service</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              We're committed to providing the highest quality vehicle wraps with exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="card-surface p-6 md:p-8 text-center">
              <Shield className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Premium Materials</h3>
              <p className="text-white/60 leading-relaxed">
                We use only the highest quality vinyl films from leading manufacturers like 3M, Avery, and KPMF.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8 text-center">
              <Award className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Expert Installers</h3>
              <p className="text-white/60 leading-relaxed">
                Our technicians are certified and have years of experience in complex vehicle wrapping applications.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8 text-center">
              <Clock className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Warranty Backed</h3>
              <p className="text-white/60 leading-relaxed">
                Our installations come with manufacturer warranties and our own workmanship guarantee for your peace of
                mind.
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
                Whether you want a new color, a unique design, or protection for your original paint, our wrapping
                services can help. Contact us today for a consultation or to schedule your appointment.
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
                src="https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?q=80&w=800&auto=format&fit=crop"
                alt="Wrapped Vehicle"
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