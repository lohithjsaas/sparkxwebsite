import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Shield, Clock, Award } from "lucide-react"

export default function CeramicCoatingPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ceramic Coating Service</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Give your vehicle long-lasting protection and a brilliant shine with our professional ceramic coating
              services. Our coatings provide superior protection against environmental contaminants, UV rays, and minor
              scratches.
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
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop"
              alt="Ceramic Coating Application"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <p className="text-lg font-bold">Superior Protection</p>
            </div>
          </div>
        </div>

        {/* What is Ceramic Coating */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What is Ceramic Coating?</h2>
            <p className="text-lg text-muted-foreground">
              Ceramic coating is a liquid polymer that chemically bonds with your vehicle's factory paint, creating a
              layer of protection that cannot be washed away or break down over a short period of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Benefits of Ceramic Coating</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Long-lasting protection (2-5 years depending on package)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Enhanced gloss and depth to your paint</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Hydrophobic properties make cleaning easier</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Protection against UV rays and oxidation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Resistance to chemical stains and etching</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span>Reduced micro-marring and swirl marks</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
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
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Our Ceramic Coating Process */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Ceramic Coating Process</h2>
            <p className="text-lg text-muted-foreground">
              We follow a meticulous process to ensure your vehicle receives the highest quality ceramic coating
              application for long-lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Inspection & Preparation</h3>
              <p className="text-muted-foreground">
                We thoroughly inspect your vehicle and prepare it by washing, clay bar treatment, and chemical
                decontamination to remove all surface contaminants.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Paint Correction</h3>
              <p className="text-muted-foreground">
                We perform multi-stage paint correction to remove swirl marks, scratches, and imperfections, creating a
                perfect surface for the coating.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Surface Preparation</h3>
              <p className="text-muted-foreground">
                We use special panel wipes to remove any oils, residues, or compounds from the paint surface to ensure
                proper bonding of the ceramic coating.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Coating Application</h3>
              <p className="text-muted-foreground">
                Our certified technicians carefully apply the ceramic coating in a controlled environment, ensuring even
                coverage and proper thickness.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Curing Process</h3>
              <p className="text-muted-foreground">
                The coating is allowed to cure under controlled conditions, with infrared lamps used when necessary to
                accelerate and optimize the curing process.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Final Inspection</h3>
              <p className="text-muted-foreground">
                We perform a detailed inspection to ensure perfect application and provide you with care instructions to
                maintain your ceramic coating.
              </p>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Ceramic Coating Packages</h2>
            <p className="text-lg text-muted-foreground">
              Choose the level of protection and durability that's right for your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Silver Package</h3>
                <div className="text-3xl font-bold mb-4">₹20,000+</div>
                <p className="text-muted-foreground mb-6">Entry-level protection for 2+ years.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Single stage paint correction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>1 layer of ceramic coating</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>2+ years of protection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Hydrophobic properties</span>
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
                <h3 className="text-xl font-semibold mb-2">Gold Package</h3>
                <div className="text-3xl font-bold mb-4">₹35,000+</div>
                <p className="text-muted-foreground mb-6">Enhanced protection for 3+ years.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Two-stage paint correction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>2 layers of ceramic coating</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>3+ years of protection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Enhanced gloss and depth</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Wheel faces coating</span>
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
                <h3 className="text-xl font-semibold mb-2">Platinum Package</h3>
                <div className="text-3xl font-bold mb-4">₹60,000+</div>
                <p className="text-muted-foreground mb-6">Ultimate protection for 5+ years.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Multi-stage paint correction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>3 layers of premium ceramic coating</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>5+ years of protection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Maximum gloss and depth</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Wheels and calipers coating</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>Glass coating</span>
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
            *Prices vary based on vehicle size and condition. Contact us for a precise quote.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Ceramic Coating Service</h2>
            <p className="text-lg text-muted-foreground">
              We're committed to providing the highest quality ceramic coating services with exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Products</h3>
              <p className="text-muted-foreground">
                We use only professional-grade ceramic coatings from leading manufacturers with proven performance.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified Technicians</h3>
              <p className="text-muted-foreground">
                Our technicians are certified and extensively trained in proper ceramic coating application techniques.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Controlled Environment</h3>
              <p className="text-muted-foreground">
                Our facility provides the ideal dust-free, temperature-controlled environment for perfect coating
                application.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card rounded-lg p-8 shadow-sm border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for a Showroom Shine?</h2>
              <p className="text-muted-foreground mb-6">
                Give your vehicle the ultimate protection and shine with our ceramic coating services. Contact us today
                to schedule a consultation or appointment.
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
                src="https://images.unsplash.com/photo-1605515298946-d0573c9b2fcd?q=80&w=800&auto=format&fit=crop"
                alt="Ceramic Coated Vehicle"
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