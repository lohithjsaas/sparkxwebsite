import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OurWorksPage() {
  return (
    <div className="pt-40 pb-12 md:pt-48 md:pb-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Works</h1>
          <p className="text-muted-foreground">
            Take a look at some of our recent detailing projects and see the SparkX difference.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="car-detailing">Car Detailing</TabsTrigger>
              <TabsTrigger value="bike-detailing">Bike Detailing</TabsTrigger>
              <TabsTrigger value="ceramic-coating">Ceramic Coating</TabsTrigger>
              <TabsTrigger value="ppf">PPF</TabsTrigger>
              <TabsTrigger value="wrapping">Wrapping</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=600&width=800&text=Project+${i + 1}`}
                    alt={`Project ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">Project {i + 1}</h3>
                      <p className="text-white/80">Premium Detailing</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="car-detailing" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=600&width=800&text=Car+Project+${i + 1}`}
                    alt={`Car Project ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">Car Project {i + 1}</h3>
                      <p className="text-white/80">Premium Car Detailing</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Other tabs content would be similar */}
          <TabsContent value="bike-detailing" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=600&width=800&text=Bike+Project+${i + 1}`}
                    alt={`Bike Project ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">Bike Project {i + 1}</h3>
                      <p className="text-white/80">Bike Detailing</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Video Embed 1</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Complete Car Detailing Process</h3>
                <p className="text-muted-foreground">
                  Watch our team transform a dirty car into a showroom-ready vehicle.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Video Embed 2</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Ceramic Coating Application</h3>
                <p className="text-muted-foreground">
                  See how we apply ceramic coating for long-lasting protection and shine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}