import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Shield, Clock, Award } from "lucide-react"

export default function PremiumCarWashPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Premium Car Wash & Detailing</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the ultimate in car care with our premium wash and detailing services. We use only the highest
              quality products and techniques to ensure your vehicle looks its absolute best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Book Now
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
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1200&auto=format&fit=crop"
              alt="Premium Car Wash & Detailing"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <p className="text-lg font-bold">Professional Service</p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Premium Car Wash & Detailing Service</h2>
            <p className="text-lg text-muted-foreground">
              We offer comprehensive car wash and detailing services that go beyond the surface to restore your
              vehicle's showroom shine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Exterior Detailing</h3>
              <p className="text-muted-foreground mb-6">
                Our exterior detailing service includes a thorough wash, clay bar treatment, polishing, and waxing to
                protect your vehicle's paint and restore its shine.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Hand wash with premium cleaning agents</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Clay bar treatment to remove contaminants</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Machine polishing to remove swirl marks and scratches</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>High-quality wax application for protection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Tire and wheel cleaning and dressing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Exterior glass cleaning and treatment</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Interior Detailing</h3>
              <p className="text-muted-foreground mb-6">
                Our interior detailing service includes a deep clean of all interior surfaces, vacuuming, steam
                cleaning, and conditioning to restore your vehicle's interior.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Thorough vacuuming of all surfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Steam cleaning of carpets and upholstery</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Leather cleaning and conditioning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Dashboard and console cleaning and protection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Interior glass cleaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Air vent cleaning and sanitizing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Detailing Packages</h2>
            <p className="text-lg text-muted-foreground">Choose the package that best suits your needs and budget.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Basic Wash</h3>
                <div className="text-3xl font-bold mb-4">₹999</div>
                <p className="text-muted-foreground mb-6">Perfect for regular maintenance and quick refreshes.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Exterior hand wash</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Tire and wheel cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Interior vacuuming</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Dashboard wipe down</span>
                  </li>
                </ul>
                <Link
                  href="/book-appointment"
                  className="block w-full text-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border shadow-sm relative">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                Most Popular
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Premium Detail</h3>
                <div className="text-3xl font-bold mb-4">₹2,499</div>
                <p className="text-muted-foreground mb-6">Comprehensive detailing for vehicles needing extra care.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Everything in Basic Wash</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Clay bar treatment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>One-step polish</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Wax application</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Interior deep cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Leather conditioning</span>
                  </li>
                </ul>
                <Link
                  href="/book-appointment"
                  className="block w-full text-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ultimate Detail</h3>
                <div className="text-3xl font-bold mb-4">₹4,999</div>
                <p className="text-muted-foreground mb-6">The ultimate in car care for those who want perfection.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Everything in Premium Detail</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Multi-stage paint correction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Premium sealant application</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Engine bay cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Headlight restoration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Complete interior rejuvenation</span>
                  </li>
                </ul>
                <Link
                  href="/book-appointment"
                  className="block w-full text-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Detailing Service</h2>
            <p className="text-lg text-muted-foreground">
              We take pride in providing the highest quality car detailing services in the area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Products</h3>
              <p className="text-muted-foreground">
                We use only the highest quality, professional-grade products that are safe for your vehicle and the
                environment.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-muted-foreground">
                Our detailers are trained professionals with years of experience in the auto detailing industry.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Attention to Detail</h3>
              <p className="text-muted-foreground">
                We pay attention to every detail, ensuring your vehicle receives the care and attention it deserves.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card rounded-lg p-8 shadow-sm border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Vehicle?</h2>
              <p className="text-muted-foreground mb-6">
                Book your premium car wash and detailing appointment today and experience the SparkX difference. Our
                team is ready to make your vehicle shine like new.
              </p>
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Book Your Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1600322305530-45714412c5b7?q=80&w=800&auto=format&fit=crop"
                alt="Car Detailing Results"
                width={800}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}