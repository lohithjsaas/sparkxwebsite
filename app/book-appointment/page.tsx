"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, CalendarIcon } from "lucide-react"

export default function BookAppointmentPage() {
  const [date, setDate] = useState<string>("")
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleType: "car",
    vehicleMake: "",
    vehicleModel: "",
    service: "",
    time: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value)
    // Check if the selected date is a Sunday (0 = Sunday, 6 = Saturday)
    if (selectedDate.getDay() === 0) {
      setError("Sundays are not available for booking. Please select another date.")
      setDate("")
    } else {
      setError("")
      setDate(e.target.value)
    }
  }

  const handleServiceChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const handleTimeChange = (value: string) => {
    setFormState((prev) => ({ ...prev, time: value }))
  }

  const handleVehicleTypeChange = (value: string) => {
    setFormState((prev) => ({ ...prev, vehicleType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!date) {
      setError("Please select a date")
      return
    }

    if (!formState.time) {
      setError("Please select a time")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      // Send the appointment data to the API route
      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          date,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        // Reset form
        setFormState({
          name: "",
          email: "",
          phone: "",
          vehicleType: "car",
          vehicleMake: "",
          vehicleModel: "",
          service: "",
          time: "",
          message: "",
        })
        setDate("")
      } else {
        setError(result.message || "Failed to book appointment")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Calculate minimum date (today)
  const today = new Date()
  const minDate = today.toISOString().split("T")[0]

  return (
    <div className="pt-40 md:pt-48 pb-12 md:pb-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-muted-foreground">
            Schedule your auto detailing appointment with our team of professionals.
          </p>
        </div>

        {isSuccess ? (
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Appointment Booked Successfully!</CardTitle>
              <CardDescription className="text-center">Thank you for choosing SparkX Auto Detailing</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
              <p className="text-center mb-6">
                We have received your appointment request and will contact you shortly to confirm the details. A
                confirmation email has been sent to your email address.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Book Another Appointment
              </button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5 border-b">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  <CardTitle>Select Date & Time</CardTitle>
                </div>
                <CardDescription>Choose your preferred date and time for the appointment</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="date" className="block text-sm font-medium mb-2">
                      Preferred Date
                    </Label>
                    <div className="relative">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={handleDateChange}
                        min={minDate}
                        className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                      <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Note: Sundays are not available for booking</p>
                  </div>

                  <div>
                    <Label htmlFor="time" className="block text-sm font-medium mb-2">
                      Preferred Time
                    </Label>
                    <Select value={formState.time} onValueChange={handleTimeChange}>
                      <SelectTrigger id="time" className="w-full">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="13:00">1:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5 border-b">
                <CardTitle>Your Information</CardTitle>
                <CardDescription>Fill in your details and service requirements</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </Label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </Label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </Label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium mb-2">Vehicle Type</Label>
                    <RadioGroup
                      value={formState.vehicleType}
                      onValueChange={handleVehicleTypeChange}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="car" id="vehicle-car" />
                        <Label htmlFor="vehicle-car">Car</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bike" id="vehicle-bike" />
                        <Label htmlFor="vehicle-bike">Bike</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="vehicle-other" />
                        <Label htmlFor="vehicle-other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="vehicleMake" className="block text-sm font-medium mb-2">
                        Make
                      </Label>
                      <input
                        type="text"
                        id="vehicleMake"
                        name="vehicleMake"
                        value={formState.vehicleMake}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="vehicleModel" className="block text-sm font-medium mb-2">
                        Model
                      </Label>
                      <input
                        type="text"
                        id="vehicleModel"
                        name="vehicleModel"
                        value={formState.vehicleModel}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Required
                    </Label>
                    <Select value={formState.service} onValueChange={handleServiceChange}>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="premium-car-wash">Premium Car Wash & Detailing</SelectItem>
                        <SelectItem value="bike-wash">Bike Wash & Detailing</SelectItem>
                        <SelectItem value="ppf">Paint Protection Film (PPF)</SelectItem>
                        <SelectItem value="ceramic-coating">Ceramic Coating Service</SelectItem>
                        <SelectItem value="body-wrapping">Body Wrapping Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium mb-2">
                      Additional Information
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>

                  {error && <div className="text-destructive text-sm">{error}</div>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:opacity-50"
                  >
                    {isSubmitting ? "Booking..." : "Book Appointment"}
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
