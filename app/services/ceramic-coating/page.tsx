import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Shield, Clock, Award } from "lucide-react"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { getService } from "@/lib/site"
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo"

const service = getService("ceramic-coating")

export const metadata: Metadata = pageMetadata({
  title: service.title,
  description: service.description,
  path: service.path,
  keywords: service.keywords,
  image: service.image,
})

export default function CeramicCoatingPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <JsonLd data={[serviceJsonLd(service), breadcrumbJsonLd([{ name: service.name, path: service.path }])]} />
      <div className="container">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 md:mb-28">
          <div>
            <h1 className="hero-rise font-display text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.035em] font-semibold mb-6">Ceramic Coating Service</h1>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60 mb-8">
              Give your vehicle long-lasting protection and a brilliant shine with our professional ceramic coating
              services. Our coatings provide superior protection against environmental contaminants, UV rays, and minor
              scratches.
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
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop"
              alt="Ceramic Coating Application"
              width={1200}
              height={800}
              className="rounded-[20px] md:rounded-[24px] w-full ring-1 ring-white/[0.06]"
            />
            <div className="absolute bottom-4 left-4 md:left-auto md:right-5 md:bottom-5 rounded-full bg-primary text-primary-foreground px-5 py-3 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.8)]">
              <p className="text-lg font-semibold">Superior Protection</p>
            </div>
          </div>
        </div>

        {/* What is Ceramic Coating */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">What is Ceramic Coating?</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              Ceramic coating is a liquid polymer that chemically bonds with your vehicle's factory paint, creating a
              layer of protection that cannot be washed away or break down over a short period of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Benefits of Ceramic Coating</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Long-lasting protection (2-5 years depending on package)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Enhanced gloss and depth to your paint</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Hydrophobic properties make cleaning easier</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Protection against UV rays and oxidation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Resistance to chemical stains and etching</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Reduced micro-marring and swirl marks</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                  <span>Preserves resale value of your vehicle</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800&auto=format&fit=crop"
                alt="Ceramic Coating Benefits"
                width={800}
                height={600}
                className="rounded-[20px] md:rounded-[24px] w-full ring-1 ring-white/[0.06]"
              />
            </div>
          </div>
        </div>

        {/* Our Ceramic Coating Process */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Our Ceramic Coating Process</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              We follow a meticulous process to ensure your vehicle receives the highest quality ceramic coating
              application for long-lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="card-surface p-6 md:p-8">
              <div className="icon-chip mb-5">
                <span className="text-brand font-display font-semibold text-2xl">1</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Inspection & Preparation</h3>
              <p className="text-white/60 leading-relaxed">
                We thoroughly inspect your vehicle and prepare it by washing, clay bar treatment, and chemical
                decontamination to remove all surface contaminants.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <div className="icon-chip mb-5">
                <span className="text-brand font-display font-semibold text-2xl">2</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Paint Correction</h3>
              <p className="text-white/60 leading-relaxed">
                We perform multi-stage paint correction to remove swirl marks, scratches, and imperfections, creating a
                perfect surface for the coating.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <div className="icon-chip mb-5">
                <span className="text-brand font-display font-semibold text-2xl">3</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Surface Preparation</h3>
              <p className="text-white/60 leading-relaxed">
                We use special panel wipes to remove any oils, residues, or compounds from the paint surface to ensure
                proper bonding of the ceramic coating.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <div className="icon-chip mb-5">
                <span className="text-brand font-display font-semibold text-2xl">4</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Coating Application</h3>
              <p className="text-white/60 leading-relaxed">
                Our certified technicians carefully apply the ceramic coating in a controlled environment, ensuring even
                coverage and proper thickness.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <div className="icon-chip mb-5">
                <span className="text-brand font-display font-semibold text-2xl">5</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Curing Process</h3>
              <p className="text-white/60 leading-relaxed">
                The coating is allowed to cure under controlled conditions, with infrared lamps used when necessary to
                accelerate and optimize the curing process.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <div className="icon-chip mb-5">
                <span className="text-brand font-display font-semibold text-2xl">6</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Final Inspection</h3>
              <p className="text-white/60 leading-relaxed">
                We perform a detailed inspection to ensure perfect application and provide you with care instructions to
                maintain your ceramic coating.
              </p>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Our Ceramic Coating Packages</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              Choose the level of protection and durability that's right for your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="card-surface overflow-hidden">
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3">Silver Package</h3>
                <div className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">₹20,000+</div>
                <p className="text-white/60 leading-relaxed mb-6">Entry-level protection for 2+ years.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Single stage paint correction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>1 layer of ceramic coating</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>2+ years of protection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Hydrophobic properties</span>
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
                <h3 className="font-display text-xl font-semibold mb-3">Gold Package</h3>
                <div className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">₹35,000+</div>
                <p className="text-white/60 leading-relaxed mb-6">Enhanced protection for 3+ years.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Two-stage paint correction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>2 layers of ceramic coating</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>3+ years of protection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Enhanced gloss and depth</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Wheel faces coating</span>
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
                <h3 className="font-display text-xl font-semibold mb-3">Platinum Package</h3>
                <div className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">₹60,000+</div>
                <p className="text-white/60 leading-relaxed mb-6">Ultimate protection for 5+ years.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Multi-stage paint correction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>3 layers of premium ceramic coating</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>5+ years of protection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Maximum gloss and depth</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Wheels and calipers coating</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                    <span>Glass coating</span>
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
            *Prices vary based on vehicle size and condition. Contact us for a precise quote.
          </p>
        </div>

        {/* Why Choose Us */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Why Choose Our Ceramic Coating Service</h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              We're committed to providing the highest quality ceramic coating services with exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="card-surface p-6 md:p-8 text-center">
              <Shield className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Premium Products</h3>
              <p className="text-white/60 leading-relaxed">
                We use only professional-grade ceramic coatings from leading manufacturers with proven performance.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8 text-center">
              <Award className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Certified Technicians</h3>
              <p className="text-white/60 leading-relaxed">
                Our technicians are certified and extensively trained in proper ceramic coating application techniques.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8 text-center">
              <Clock className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Controlled Environment</h3>
              <p className="text-white/60 leading-relaxed">
                Our facility provides the ideal dust-free, temperature-controlled environment for perfect coating
                application.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div data-reveal className="card-surface p-6 md:p-10 lg:p-12 md:hover:translate-y-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">Ready for a Showroom Shine?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Give your vehicle the ultimate protection and shine with our ceramic coating services. Contact us today
                to schedule a consultation or appointment.
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
                src="https://images.unsplash.com/photo-1605515298946-d0573c9b2fcd?q=80&w=800&auto=format&fit=crop"
                alt="Ceramic Coated Vehicle"
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