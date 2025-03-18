export default function TestimonialsPage() {
    return (
      <div className="pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h1>
            <p className="text-muted-foreground">
              See what our satisfied customers have to say about our auto detailing services.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm border">
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
                <p className="text-card-foreground mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                    <span className="text-muted-foreground font-medium">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  const testimonials = [
    {
      name: "Lohith J",
      initials: "LJ",
      title: "Satisfied Customer",
      content:
        "SparkX did an amazing job on my car. It looks better than when I first bought it! The team was professional and thorough. Highly recommend their services.",
    },
    {
      name: "Niranjan",
      initials: "NR",
      title: "Ceramic Coating Customer",
      content:
        "The ceramic coating service is worth every penny. My car has never looked better and it's so much easier to clean now. The team at SparkX is knowledgeable and friendly.",
    },
    {
      name: "Paul",
      initials: "PL",
      title: "Bike Detailing Customer",
      content:
        "I had my motorcycle detailed at SparkX and I couldn't be happier with the results. They paid attention to every detail and it looks brand new. Great service!",
    },
    {
      name: "Ramesh K",
      initials: "RK",
      title: "Regular Customer",
      content:
        "I've been taking my cars to SparkX for over a year now and they never disappoint. The quality of their work is consistent and their customer service is excellent.",
    },
    {
      name: "Anbu",
      initials: "AB",
      title: "PPF Customer",
      content:
        "The paint protection film they installed on my new car is perfect. You can't even tell it's there, but I know my paint is protected. Worth every penny for the peace of mind.",
    },
  ]  