import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Shield } from "lucide-react"

export default function PPFPage() {
  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative w-full pt-32 pb-16 md:pt-48 md:pb-24 min-h-[60vh] md:min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <iframe
            src="https://player.vimeo.com/video/1062794970?h=a142ad800e&autoplay=1&loop=1&background=1&muted=1"
            className="w-full h-full"
            allow="autoplay; loop"
            frameBorder="0"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100%",
              objectFit: "cover",
            }}
            title="Paint Protection Film Application"
          ></iframe>
        </div>
        <div className="relative z-20 px-8 md:px-16 w-full">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">Paint Protection Film (PPF)</h1>
            <p className="text-lg md:text-xl text-white/90">
              Protect your vehicle's paint from scratches, chips, and environmental damage with our premium PPF
              solutions. Virtually invisible protection that keeps your car looking showroom new.
            </p>
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Book Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Paint Protection Film</h2>
            <p className="text-muted-foreground">
              Our premium PPF offers unmatched protection while maintaining your vehicle's original appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Superior Protection</h3>
              <p className="text-muted-foreground">
                Guards against rock chips, scratches, bug splatter, bird droppings, and other environmental
                contaminants.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Self-Healing Properties</h3>
              <p className="text-muted-foreground">
                Our PPF features advanced self-healing technology that repairs minor scratches with heat exposure.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">UV Resistance</h3>
              <p className="text-muted-foreground">
                Prevents paint fading and yellowing by blocking harmful UV rays, keeping your car's color vibrant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our PPF Packages</h2>
            <p className="text-muted-foreground">
              Choose the protection package that's right for your vehicle and driving habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden border shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1577273375713-079df4ead1be?q=80&w=800&auto=format&fit=crop"
                  alt="Front-End Protection"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">Front-End Package</h3>
              </div>
              <div className="p-6">
                <p className="mb-4 text-muted-foreground">
                  Protect the most vulnerable areas of your vehicle from road debris and damage.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Full hood protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Front fenders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Front bumper</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Side mirrors</span>
                  </li>
                </ul>
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium z-10">
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
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">Partial Coverage</h3>
              </div>
              <div className="p-6">
                <p className="mb-4 text-muted-foreground">
                  Comprehensive protection for all high-impact areas of your vehicle.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Everything in Front-End Package</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>A-pillars and roof line</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Door cups and edges</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Trunk ledge</span>
                  </li>
                </ul>
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop"
                  alt="Full Body Protection"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">Full Body Protection</h3>
              </div>
              <div className="p-6">
                <p className="mb-4 text-muted-foreground">
                  The ultimate protection package for complete vehicle coverage and peace of mind.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Full vehicle coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>All painted surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Headlights & fog lights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Extended warranty</span>
                  </li>
                </ul>
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Get answers to common questions about our Paint Protection Film services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">How long does PPF last?</h3>
              <p className="text-muted-foreground">
                Our premium PPF typically lasts 7-10 years with proper maintenance. We offer warranties of up to 10
                years depending on the package you choose.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Is PPF visible once installed?</h3>
              <p className="text-muted-foreground">
                Our high-quality PPF is virtually invisible once installed. It preserves the original appearance of your
                vehicle while providing exceptional protection.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">How do I maintain PPF?</h3>
              <p className="text-muted-foreground">
                PPF is low maintenance - simply wash your car as normal using pH-neutral soaps. Avoid harsh chemicals
                and high-pressure washing directly on the edges of the film.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Can PPF be removed?</h3>
              <p className="text-muted-foreground">
                Yes, PPF can be safely removed without damaging your vehicle's paint when professionally done. Our PPF
                is designed for clean removal even after years of protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center bg-card rounded-xl overflow-hidden shadow-lg">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Protect Your Vehicle?</h2>
              <p className="text-muted-foreground mb-6">
                Don't wait until your paint is damaged. Protect your investment with our premium PPF solutions. Contact
                us today to schedule an appointment or get a custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
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