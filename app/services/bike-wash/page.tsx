import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Shield, Clock, Award } from "lucide-react"

export default function BikeWashPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Bike Wash & Detailing</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Give your motorcycle the care it deserves with our specialized bike wash and detailing services. We
              understand the unique needs of motorcycles and provide meticulous attention to every component.
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
              src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1200&auto=format&fit=crop"
              alt="Bike Wash & Detailing"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <p className="text-lg font-bold">Specialized Service</p>
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Bike Wash & Detailing Service</h2>
            <p className="text-lg text-muted-foreground">
              We offer comprehensive motorcycle cleaning and detailing services that are specifically designed for
              two-wheelers of all types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Exterior Cleaning</h3>
              <p className="text-muted-foreground mb-6">
                Our exterior cleaning service includes a thorough wash, degreasing, polishing, and protection to keep
                your bike looking its best.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Hand wash with motorcycle-specific cleaners</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Engine and chain degreasing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Chrome and metal polishing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Paint protection application</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Wheel and tire cleaning and dressing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Exhaust cleaning and polishing</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Mechanical Care</h3>
              <p className="text-muted-foreground mb-6">
                Our mechanical care service includes attention to the functional components of your motorcycle to ensure
                it not only looks great but performs well too.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Chain cleaning and lubrication</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Brake dust removal</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Detailed cleaning of hard-to-reach areas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Seat cleaning and conditioning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Instrument panel cleaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Basic inspection of key components</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Bike Detailing Packages</h2>
            <p className="text-lg text-muted-foreground">Choose the package that best suits your motorcycle's needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Basic Wash</h3>
                <div className="text-3xl font-bold mb-4">₹699</div>
                <p className="text-muted-foreground mb-6">Quick refresh for your motorcycle.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Exterior hand wash</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Chain degreasing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Wheel cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Basic polish</span>
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
                <div className="text-3xl font-bold mb-4">₹1,499</div>
                <p className="text-muted-foreground mb-6">Comprehensive care for your motorcycle.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Everything in Basic Wash</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Engine degreasing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Chrome polishing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Paint protection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Chain lubrication</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Seat conditioning</span>
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
                <div className="text-3xl font-bold mb-4">₹2,999</div>
                <p className="text-muted-foreground mb-6">The ultimate in motorcycle care.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Everything in Premium Detail</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Exhaust restoration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Detailed paint correction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Premium ceramic coating</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Complete mechanical inspection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Headlight restoration</span>
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Bike Detailing Service</h2>
            <p className="text-lg text-muted-foreground">
              We understand motorcycles and provide specialized care that regular car wash services can't match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Motorcycle Specialists</h3>
              <p className="text-muted-foreground">
                Our team specializes in motorcycles and understands the unique cleaning and maintenance requirements of
                different bike types.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safe Techniques</h3>
              <p className="text-muted-foreground">
                We use techniques and products that are safe for all motorcycle components, including sensitive
                electronics and finishes.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Attention to Detail</h3>
              <p className="text-muted-foreground">
                We pay attention to every nook and cranny, ensuring your bike receives the meticulous care it deserves.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card rounded-lg p-8 shadow-sm border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make Your Bike Shine?</h2>
              <p className="text-muted-foreground mb-6">
                Book your bike wash and detailing appointment today and experience the SparkX difference. Our team is
                ready to give your motorcycle the care it deserves.
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
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop"
                alt="Motorcycle Detailing Results"
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