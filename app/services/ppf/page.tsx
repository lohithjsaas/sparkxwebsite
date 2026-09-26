import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Shield } from "lucide-react"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { getService, ppfFaqs } from "@/lib/site"
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo"

const service = getService("ppf")

export const metadata: Metadata = pageMetadata({
  title: service.title,
  description: service.description,
  path: service.path,
  keywords: service.keywords,
  image: service.image,
})

export default function PPFPage() {
  return (
    <div>
      <JsonLd data={[serviceJsonLd(service), breadcrumbJsonLd([{ name: service.name, path: service.path }]), faqJsonLd(ppfFaqs)]} />
      {/* Hero Section with Video Background */}
      <section className="mx-auto w-full max-w-[1600px] px-2 pt-2 sm:px-4 lg:px-6 lg:pt-4">
        <div className="relative w-full overflow-hidden rounded-[24px] ring-1 ring-white/[0.06] lg:rounded-[28px] pt-36 pb-12 md:pt-48 md:pb-20 min-h-[80svh] md:min-h-[75vh] flex items-end md:items-center">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/50 to-black/40 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-black/20" />
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <iframe
            src="https://player.vimeo.com/video/1062794970?h=a142ad800e&autoplay=1&loop=1&background=1&muted=1"
            className="pointer-events-none"
            allow="autoplay; loop"
            frameBorder="0"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "max(100%, 177.78vh)",
              height: "max(100%, 56.25vw)",
              transform: "translate(-50%, -50%)",
            }}
            title="Paint Protection Film Application"
          ></iframe>
        </div>
        <div className="relative z-20 px-5 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl space-y-6">
            <h1 className="hero-rise font-display text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-[-0.035em] font-semibold text-white">Paint Protection Film (PPF)</h1>
            <p className="hero-rise text-[16px] md:text-[18px] leading-relaxed text-white/75" style={{ animationDelay: "0.15s" }}>
              Protect your vehicle's paint from scratches, chips, and environmental damage with our premium PPF
              solutions. Virtually invisible protection that keeps your car looking showroom new.
            </p>
            <Link
              href="/book-appointment"
              className="btn-primary group"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.03em] font-semibold mb-4">Benefits of Paint Protection Film</h2>
            <p className="text-white/60 leading-relaxed">
              Our premium PPF offers unmatched protection while maintaining your vehicle's original appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="card-surface p-6 md:p-8">
              <Shield className="h-10 w-10 text-brand mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Superior Protection</h3>
              <p className="text-white/60 leading-relaxed">
                Guards against rock chips, scratches, bug splatter, bird droppings, and other environmental
                contaminants.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <CheckCircle2 className="h-10 w-10 text-brand mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Self-Healing Properties</h3>
              <p className="text-white/60 leading-relaxed">
                Our PPF features advanced self-healing technology that repairs minor scratches with heat exposure.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <CheckCircle2 className="h-10 w-10 text-brand mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">UV Resistance</h3>
              <p className="text-white/60 leading-relaxed">
                Prevents paint fading and yellowing by blocking harmful UV rays, keeping your car's color vibrant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.03em] font-semibold mb-4">Our PPF Packages</h2>
            <p className="text-white/60 leading-relaxed">
              Choose the protection package that's right for your vehicle and driving habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="card-surface overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1577273375713-079df4ead1be?q=80&w=800&auto=format&fit=crop"
                  alt="Front-End Protection"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">Front-End Package</h3>
              </div>
              <div className="p-6">
                <p className="mb-4 text-muted-foreground">
                  Protect the most vulnerable areas of your vehicle from road debris and damage.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand mr-2 mt-0.5 shrink-0" />
                    <span>Full hood protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand mr-2 mt-0.5 shrink-0" />
                    <span>Front fenders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand mr-2 mt-0.5 shrink-0" />
                    <span>Front bumper</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand mr-2 mt-0.5 shrink-0" />
                    <span>Side mirrors</span>
                  </li>
                </ul>
                <Link
                  href="/book-appointment"
                  className="btn-primary group w-full"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="card-surface overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute top-3 right-3 bg-brand text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                  Popular
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=800&auto=format&fit=crop"
                  alt="Partial Coverage"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">Partial Coverage</h3>
              </div>
              <div className="p-6">
                <p className="mb-4 text-muted-foreground">
                  Comprehensive protection for all high-impact areas of your vehicle.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand mr-2 mt-0.5 shrink-0" />
                    <span>Everything in Front-End Package</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand mr-2 mt-0.5 shrink-0" />
                    <span>A-pillars and roof line</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand mr-2 mt-0.5 shrink-0" />
                    <span>Door cups and edges</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand mr-2 mt-0.5 shrink-0" />
                    <span>Trunk ledge</span>
                  </li>
                </ul>
                <Link
                  href="/book-appointment"
                  className="btn-primary group w-full"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="card-surface overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop"
                  alt="Full Body Protection"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">Full Body Protection</h3>
              </div>
              <div className="p-6">
                <p className="mb-4 text-muted-foreground">
                  The ultimate protection package for complete vehicle coverage and peace of mind.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand mr-2 mt-0.5 shrink-0" />
                    <span>Full vehicle coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand mr-2 mt-0.5 shrink-0" />
                    <span>All painted surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand mr-2 mt-0.5 shrink-0" />
                    <span>Headlights & fog lights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand mr-2 mt-0.5 shrink-0" />
                    <span>Extended warranty</span>
                  </li>
                </ul>
                <Link
                  href="/book-appointment"
                  className="btn-primary group w-full"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.03em] font-semibold mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60 leading-relaxed">
              Get answers to common questions about our Paint Protection Film services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="card-surface p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-3">How long does PPF last?</h3>
              <p className="text-white/60 leading-relaxed">
                Our premium PPF typically lasts 7-10 years with proper maintenance. We offer warranties of up to 10
                years depending on the package you choose.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-3">Is PPF visible once installed?</h3>
              <p className="text-white/60 leading-relaxed">
                Our high-quality PPF is virtually invisible once installed. It preserves the original appearance of your
                vehicle while providing exceptional protection.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-3">How do I maintain PPF?</h3>
              <p className="text-white/60 leading-relaxed">
                PPF is low maintenance - simply wash your car as normal using pH-neutral soaps. Avoid harsh chemicals
                and high-pressure washing directly on the edges of the film.
              </p>
            </div>

            <div className="card-surface p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-3">Can PPF be removed?</h3>
              <p className="text-white/60 leading-relaxed">
                Yes, PPF can be safely removed without damaging your vehicle's paint when professionally done. Our PPF
                is designed for clean removal even after years of protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center card-surface overflow-hidden">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h2 className="font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.03em] font-semibold mb-4">Ready to Protect Your Vehicle?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Don't wait until your paint is damaged. Protect your investment with our premium PPF solutions. Contact
                us today to schedule an appointment or get a custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/book-appointment"
                  className="btn-primary group"
                >
                  Book Appointment
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
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=800&auto=format&fit=crop"
                alt="PPF Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}