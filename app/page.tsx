import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Clock, Award, Sparkles, Car, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section with Background Video */}
      <section className="relative w-full">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <iframe
            src="https://player.vimeo.com/video/1066905938?h=a142ad800e&autoplay=1&loop=1&background=1&muted=1"
            className="w-fit h-fit"
            allow="autoplay; loop"
            frameBorder="0"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "120%",
              height: "150%",
              objectFit: "cover",
            }}
            title="SparkX Auto Detailing"
          ></iframe>
        </div>
        <div className="relative min-h-[90vh] md:h-[100vh] z-20 w-full">
          <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 pt-32">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">Premium Auto Detailing Services</h1>
              <p className="text-lg md:text-xl text-white/90">
                Make your vehicle shine like new with our professional detailing services. We take pride in our
                attention to detail and quality service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/our-works"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white/20"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/916362613388"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SparkX?</h2>
            <p className="text-muted-foreground">
              We deliver exceptional auto detailing services with attention to detail and customer satisfaction as our
              top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                We use only the highest quality products and techniques to ensure your vehicle gets the best treatment
                possible.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Efficient Service</h3>
              <p className="text-muted-foreground">
                Our experienced team works efficiently to deliver exceptional results without keeping you waiting.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <Award className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-muted-foreground">
                Our detailers are trained professionals with years of experience in the auto detailing industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              We offer a wide range of auto detailing services to keep your vehicle looking its best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors z-10" />
              <Image
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800&auto=format&fit=crop"
                alt="Premium Car Wash & Detailing"
                width={800}
                height={600}
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <Car className="h-8 w-8 text-primary mb-2" />
                <h3 className="text-xl font-semibold text-white mb-2">Premium Car Wash & Detailing</h3>
                <p className="text-white/80 mb-4">Comprehensive cleaning and detailing for your car, inside and out.</p>
                <Link
                  href="/services/premium-car-wash"
                  className="inline-flex items-center text-sm font-medium text-white hover:text-primary"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors z-10" />
              <Image
                src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=800&auto=format&fit=crop"
                alt="Bike Wash & Detailing"
                width={800}
                height={600}
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <Sparkles className="h-8 w-8 text-primary mb-2" />
                <h3 className="text-xl font-semibold text-white mb-2">Bike Wash & Detailing</h3>
                <p className="text-white/80 mb-4">
                  Expert cleaning and detailing services for motorcycles of all types.
                </p>
                <Link
                  href="/services/bike-wash"
                  className="inline-flex items-center text-sm font-medium text-white hover:text-primary"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors z-10" />
              <Image
                src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=800&auto=format&fit=crop"
                alt="Ceramic Coating Service"
                width={800}
                height={600}
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <Shield className="h-8 w-8 text-primary mb-2" />
                <h3 className="text-xl font-semibold text-white mb-2">Ceramic Coating Service</h3>
                <p className="text-white/80 mb-4">
                  Long-lasting protection for your vehicle's paint with ceramic coating.
                </p>
                <Link
                  href="/services/ceramic-coating"
                  className="inline-flex items-center text-sm font-medium text-white hover:text-primary"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Appointment?</h2>
              <p className="text-muted-foreground mb-6">
                Schedule your auto detailing appointment today and experience the SparkX difference. Our team is ready
                to make your vehicle shine like new.
              </p>
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Book Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800&auto=format&fit=crop"
                alt="Car Detailing"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="text-lg font-bold">100% Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-card-foreground mb-4">
                "SparkX did an amazing job on my car. It looks better than when I first bought it! The team was
                professional and thorough. Highly recommend their services."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                  <span className="text-muted-foreground font-medium">JD</span>
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">Satisfied Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-card-foreground mb-4">
                "The ceramic coating service is worth every penny. My car has never looked better and it's so much
                easier to clean now. The team at SparkX is knowledgeable and friendly."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                  <span className="text-muted-foreground font-medium">JS</span>
                </div>
                <div>
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-sm text-muted-foreground">Ceramic Coating Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-card-foreground mb-4">
                "I had my motorcycle detailed at SparkX and I couldn't be happier with the results. They paid attention
                to every detail and it looks brand new. Great service!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                  <span className="text-muted-foreground font-medium">RJ</span>
                </div>
                <div>
                  <p className="font-medium">Robert Johnson</p>
                  <p className="text-sm text-muted-foreground">Bike Detailing Customer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
            >
              View All Testimonials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}