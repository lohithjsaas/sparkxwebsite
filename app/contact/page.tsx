import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Contact Us — Akshayanagar, Bengaluru",
  description: "SparkX Auto Detailing, Yelenahalli Main Rd, Akshayanagar, Bengaluru 560076. Call +91-6362613388 · Open Mon–Sun 9 AM–8 PM. Get directions or message us.",
  path: "/contact",
  keywords: ["SparkX Auto Detailing contact", "car detailing Akshayanagar", "car detailing near me", "detailing studio Bengaluru address"],
})

export default function ContactPage() {
  return (
    <div className="pb-20 md:pb-28">
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <PageHeader title="Contact Us" text="Have questions or want to schedule an appointment? Get in touch with our team." />
      <div className="container">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="card-surface p-6 md:p-10 lg:p-12 md:hover:translate-y-0">
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="input-field"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div data-reveal className="card-surface p-6 md:p-10 lg:p-12 md:hover:translate-y-0">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Address</h3>
                    <p className="text-white/60 leading-relaxed">
                    Yelenahalli Main Rd, Akshayanagara West, DLF Newtown,
                      <br />
                      Akshayanagar, Bengaluru, Karnataka 560076
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-white/60 leading-relaxed">
                      <a href="tel:+916362613388" className="hover:text-brand">
                        +91-6362613388
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-white/60 leading-relaxed">
                      <a href="mailto:prabhu@sparkxdetailing.in" className="hover:text-brand">
                        prabhu@sparkxdetailing.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-brand shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Business Hours</h3>
                    <p className="text-white/60 leading-relaxed">
                      Monday - Sunday: 9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div data-reveal className="card-surface p-6 md:p-10 lg:p-12 md:hover:translate-y-0">
              <h2 className="text-2xl font-semibold mb-6">Location</h2>
              <div className="aspect-video rounded-[20px] overflow-hidden ring-1 ring-white/[0.06]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.510011906782!2d77.61389507656665!3d12.874893116988153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6bd66d02a847%3A0x46f2de73b602e9f!2sSparkx%20Auto%20Detailing%2C%20PPF%2C%20Ceramic%20Coating%2C%20Graphene%20coating%2C%20Sunfilm%2C%20Car%20Wash%2C%20%5BAKSHAY%20NAGAR%20DLF%20NEW%20TOWN%5D!5e0!3m2!1sen!2sin!4v1743139239917!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SparkX Auto Detailing Location"
                  aria-label="Map showing SparkX Auto Detailing location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
