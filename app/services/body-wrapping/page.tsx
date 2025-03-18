import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Award, Clock, Shield } from "lucide-react"

export default function BodyWrappingPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Body Wrapping Services</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Transform your vehicle's appearance with our premium vinyl wrapping services. From color changes to custom
              designs, our expert installers deliver flawless results that protect your original paint while giving your
              vehicle a unique look.
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
              src="https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?q=80&w=1200&auto=format&fit=crop"
              alt="Vehicle Vinyl Wrapping"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <p className="text-lg font-bold">Transform Your Look</p>
            </div>
          </div>
        </div>

        {/* What is Vehicle Wrapping */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What is Vehicle Wrapping?</h2>
            <p className="text-lg text-muted-foreground">
              Vehicle wrapping involves applying large vinyl sheets to your vehicle's exterior, allowing you to change
              its color or add custom designs without permanent changes to the original paint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Benefits of Vehicle Wrapping</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Protects your vehicle's original paint</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Completely reversible - can be removed without damage</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Endless color and finish options (matte, gloss, satin, metallic)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Custom designs and graphics available</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>More cost-effective than a quality paint job</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Typically lasts 5-7 years with proper care</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
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
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Our Wrapping Process */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Wrapping Process</h2>
            <p className="text-lg text-muted-foreground">
              We follow a meticulous process to ensure your vehicle wrap is applied perfectly and lasts for years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation & Design</h3>
              <p className="text-muted-foreground">
                We discuss your vision, recommend materials, and create digital mockups to visualize the final result
                before proceeding.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vehicle Preparation</h3>
              <p className="text-muted-foreground">
                We thoroughly clean, clay bar, and decontaminate your vehicle to ensure the wrap adheres properly and
                lasts longer.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Disassembly</h3>
              <p className="text-muted-foreground">
                We remove necessary parts like door handles, emblems, and trim pieces to ensure a seamless wrap with no
                visible edges.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vinyl Application</h3>
              <p className="text-muted-foreground">
                Our skilled technicians carefully apply the vinyl, using heat and specialized tools to conform to your
                vehicle's contours.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trimming & Finishing</h3>
              <p className="text-muted-foreground">
                We precisely trim the vinyl around edges, panel gaps, and features, then use heat to ensure proper
                adhesion in complex areas.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reassembly & Inspection</h3>
              <p className="text-muted-foreground">
                We reinstall all removed parts and perform a detailed inspection to ensure perfect application before
                delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Wrapping Options */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Wrapping Options</h2>
            <p className="text-lg text-muted-foreground">
              We offer a wide range of vinyl options to suit your style and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
              <div className="aspect-square bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Color Change Wraps</h3>
                <p className="text-sm text-muted-foreground">
                  Transform your vehicle with a complete color change in gloss, matte, or satin finishes.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
              <div className="aspect-square bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Chrome & Metallic Wraps</h3>
                <p className="text-sm text-muted-foreground">
                  Make a bold statement with eye-catching chrome or metallic finish wraps.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
              <div className="aspect-square bg-gradient-to-r from-green-500 to-blue-500"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Color Shift Wraps</h3>
                <p className="text-sm text-muted-foreground">
                  Create a dynamic look with color-shifting vinyl that changes hue depending on the viewing angle.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
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
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Wrapping Packages</h2>
            <p className="text-lg text-muted-foreground">Choose the coverage that best suits your needs and budget.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Partial Wrap</h3>
                <div className="text-3xl font-bold mb-4">₹30,000+</div>
                <p className="text-muted-foreground mb-6">Accent specific areas of your vehicle.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Hood wrap</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Roof wrap</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Mirror caps</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Accent stripes</span>
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
                <h3 className="text-xl font-semibold mb-2">Full Wrap</h3>
                <div className="text-3xl font-bold mb-4">₹80,000+</div>
                <p className="text-muted-foreground mb-6">Complete color change for your vehicle.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Complete exterior wrap</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Door jambs (optional)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Premium vinyl materials</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>5+ year durability</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Complete paint protection</span>
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
                <h3 className="text-xl font-semibold mb-2">Custom Design Wrap</h3>
                <div className="text-3xl font-bold mb-4">₹120,000+</div>
                <p className="text-muted-foreground mb-6">Unique custom designs and graphics.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Custom design creation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Full vehicle coverage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Premium printed vinyl</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Protective overlaminate</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Digital mockups included</span>
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
          <p className="text-sm text-muted-foreground text-center mt-4">
            *Prices vary based on vehicle size, wrap material, and complexity. Contact us for a precise quote.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Wrapping Service</h2>
            <p className="text-lg text-muted-foreground">
              We're committed to providing the highest quality vehicle wraps with exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
              <p className="text-muted-foreground">
                We use only the highest quality vinyl films from leading manufacturers like 3M, Avery, and KPMF.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Installers</h3>
              <p className="text-muted-foreground">
                Our technicians are certified and have years of experience in complex vehicle wrapping applications.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Warranty Backed</h3>
              <p className="text-muted-foreground">
                Our installations come with manufacturer warranties and our own workmanship guarantee for your peace of
                mind.
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
                Whether you want a new color, a unique design, or protection for your original paint, our wrapping
                services can help. Contact us today for a consultation or to schedule your appointment.
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
                src="https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?q=80&w=800&auto=format&fit=crop"
                alt="Wrapped Vehicle"
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