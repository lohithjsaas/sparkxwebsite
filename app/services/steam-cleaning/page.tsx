import { LoopVideo } from "@/components/loop-video"
import Link from "next/link"
import { ArrowRight, Check, Shield, Clock, Award, Droplets, Leaf, Wind } from "lucide-react"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { getService } from "@/lib/site"
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo"

const service = getService("steam-cleaning")

export const metadata: Metadata = pageMetadata({
  title: service.title,
  description: service.description,
  path: service.path,
  keywords: service.keywords,
  image: service.image,
})

const areas = [
  {
    title: "Seats & Upholstery",
    text: "High-temperature steam lifts embedded dirt, sweat and stains from fabric seats and gently refreshes leather.",
    points: ["Fabric & leather seats", "Seat rails and gaps", "Headrests and armrests"],
  },
  {
    title: "Carpets, Mats & Roof Liner",
    text: "Deep steam cleaning loosens grime from carpets, floor mats and the roof liner without soaking them.",
    points: ["Floor carpets and mats", "Boot / trunk lining", "Roof liner (headliner)"],
  },
  {
    title: "Dashboard, Vents & Panels",
    text: "Steam reaches into vents, seams and switchgear that cloths and vacuums can't, leaving every surface fresh.",
    points: ["AC vents and air ducts", "Dashboard and centre console", "Door panels, handles and pockets"],
  },
]

const benefits = [
  { icon: Leaf, title: "Chemical-Free", text: "Cleans with the power of steam, so there are no harsh chemical residues left behind in the cabin." },
  { icon: Shield, title: "Sanitises Surfaces", text: "High-temperature steam helps eliminate germs, bacteria and allergens on the surfaces you touch every day." },
  { icon: Wind, title: "Removes Odours", text: "Tackles the source of stale food, smoke and damp smells instead of masking them with fragrance." },
  { icon: Droplets, title: "Quick Drying", text: "Low-moisture dry steam cleans deeply without soaking seats and carpets, so your car is ready sooner." },
]

const steps = [
  { title: "Inspection", text: "We check the cabin materials and stains to choose the right steam settings for each surface." },
  { title: "Dry Vacuum", text: "Loose dust, sand and debris are vacuumed out from seats, carpets and every corner." },
  { title: "Steam Cleaning", text: "Every surface is steam cleaned — upholstery, carpets, roof liner, dashboard, vents and panels." },
  { title: "Wipe & Extract", text: "Loosened dirt is wiped and extracted with microfibre so it leaves the car, not just moves around." },
  { title: "Dry & Deodorise", text: "The cabin is aired out and dried, leaving it clean, fresh and ready to drive." },
]

export default function SteamCleaningPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <JsonLd data={[serviceJsonLd(service), breadcrumbJsonLd([{ name: service.name, path: service.path }])]} />
      <div className="container">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 md:mb-28">
          <div>
            <h1 className="hero-rise font-display text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.035em] font-semibold mb-6">
              Steam Cleaning
            </h1>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60 mb-8">
              Give your car a deep, hygienic clean from the inside out. Our interior steam cleaning uses
              high-temperature, low-moisture steam to lift dirt, stains and odours from every surface — without harsh
              chemicals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/book-appointment" className="btn-primary group">
                Book Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[560px]">
            <LoopVideo
              src="/videos/sparkx-steam-cleaning-bengaluru.mp4"
              poster="/images/sparkx-steam-cleaning-bengaluru-poster.jpg"
              label="SparkX detailer steam cleaning a car's sun visor and roof liner at the SparkX studio in Akshayanagar, Bengaluru"
              className="aspect-square w-full rounded-[20px] object-cover ring-1 ring-white/[0.06] md:rounded-[24px]"
            />
            <div className="absolute bottom-4 left-4 md:left-auto md:right-5 md:bottom-5 rounded-full bg-primary text-primary-foreground px-5 py-3 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.8)]">
              <p className="text-lg font-semibold">Chemical-Free Clean</p>
            </div>
          </div>
        </div>

        {/* What we steam clean */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">
              What We Steam Clean
            </h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              A complete interior steam treatment that reaches the places everyday cleaning misses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {areas.map((area) => (
              <div key={area.title} className="card-surface p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold mb-4">{area.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6">{area.text}</p>
                <ul className="space-y-2">
                  {area.points.map((point) => (
                    <li key={point} className="flex items-start">
                      <Check className="h-5 w-5 text-brand shrink-0 mt-0.5 mr-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">
              Benefits of Steam Cleaning
            </h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              Cleaner, healthier and fresher — the difference you can see, feel and smell.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-surface p-6 md:p-8">
                <div className="icon-chip mb-5">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
                <p className="text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">
              Our Steam Cleaning Process
            </h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              A careful, step-by-step routine for a thorough and safe clean.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="card-surface p-6">
                <div className="font-display text-sm font-semibold text-brand mb-3">0{i + 1}</div>
                <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-white/60 leading-relaxed text-[14.5px]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div data-reveal className="mb-20 md:mb-28">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">
              Why Choose SparkX
            </h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-white/60">
              We take pride in providing the highest quality detailing services in the area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="card-surface p-6 md:p-8 text-center">
              <Shield className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Premium Products</h3>
              <p className="text-white/60 leading-relaxed">
                We use only the highest quality, professional-grade products that are safe for your vehicle and the
                environment.
              </p>
            </div>
            <div className="card-surface p-6 md:p-8 text-center">
              <Award className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Experienced Team</h3>
              <p className="text-white/60 leading-relaxed">
                Our detailers are trained professionals with years of experience in the auto detailing industry.
              </p>
            </div>
            <div className="card-surface p-6 md:p-8 text-center">
              <Clock className="h-10 w-10 text-brand mx-auto mb-4" strokeWidth={1.6} />
              <h3 className="font-display text-xl font-semibold mb-3">Attention to Detail</h3>
              <p className="text-white/60 leading-relaxed">
                We pay attention to every detail, ensuring your vehicle receives the care and attention it deserves.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div data-reveal className="card-surface p-6 md:p-10 lg:p-12 md:hover:translate-y-0 text-center">
          <h2 className="font-display text-[28px] md:text-[40px] leading-[1.08] tracking-[-0.03em] font-semibold mb-4">
            Ready for a Fresh, Hygienic Interior?
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
            Book your steam cleaning appointment today, or contact us for a quote for your vehicle. Our team is ready to
            make your cabin feel like new again.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/book-appointment" className="btn-primary group">
              Book Your Appointment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="btn-outline">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
