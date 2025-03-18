import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, email, phone, vehicleType, vehicleMake, vehicleModel, service, date, time, message } = await req.json()

  // Format the service name for display
  const getServiceName = (serviceValue: string) => {
    const services: Record<string, string> = {
      "premium-car-wash": "Premium Car Wash & Detailing",
      "bike-wash": "Bike Wash & Detailing",
      ppf: "Paint Protection Film (PPF)",
      "ceramic-coating": "Ceramic Coating Service",
      "body-wrapping": "Body Wrapping Services",
    }
    return services[serviceValue] || serviceValue
  }

  // Create a transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      user: "prabhu@sparkxdetailing.in",
      pass: "uvgb tpgd ajtn eghy",
    },
  })

  try {
    // Send email to admin
    await transporter.sendMail({
      from: "prabhu@sparkxdetailing.in",
      to: "prabhu@sparkxdetailing.in",
      subject: `New Appointment Booking: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${getServiceName(service)}
        Date: ${date}
        Time: ${time}
        Vehicle Type: ${vehicleType}
        Vehicle Make: ${vehicleMake}
        Vehicle Model: ${vehicleModel}
        Additional Message: ${message || "None"}
      `,
      html: `
        <h1>New Appointment Booking</h1>
        <h2>Customer Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h2>Appointment Details</h2>
        <p><strong>Service:</strong> ${getServiceName(service)}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        
        <h2>Vehicle Information</h2>
        <p><strong>Type:</strong> ${vehicleType}</p>
        <p><strong>Make:</strong> ${vehicleMake}</p>
        <p><strong>Model:</strong> ${vehicleModel}</p>
        
        <h2>Additional Message</h2>
        <p>${message || "None"}</p>
      `,
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: "systems@saasiple.in",
      to: email,
      subject: "Your Appointment Confirmation - SparkX Auto Detailing",
      text: `
        Dear ${name},
        
        Thank you for booking an appointment with SparkX Auto Detailing. We have received your booking and are looking forward to serving you.
        
        Appointment Details:
        Service: ${getServiceName(service)}
        Date: ${date}
        Time: ${time}
        
        Vehicle Information:
        Type: ${vehicleType}
        Make: ${vehicleMake}
        Model: ${vehicleModel}
        
        If you need to make any changes to your appointment or have any questions, please contact us at systems@saasiple.in or call us at +91 9876543210.
        
        We look forward to seeing you!
        
        SparkX Auto Detailing
        123 Main Street, Bangalore, India
        Phone: +91 9876543210 | Email: systems@saasiple.in
      `,
      html: `
        <h1>Appointment Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Thank you for booking an appointment with SparkX Auto Detailing. We have received your booking and are looking forward to serving you.</p>
        
        <h2>Your Appointment Details</h2>
        <p><strong>Service:</strong> ${getServiceName(service)}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        
        <h2>Vehicle Information</h2>
        <p><strong>Type:</strong> ${vehicleType}</p>
        <p><strong>Make:</strong> ${vehicleMake}</p>
        <p><strong>Model:</strong> ${vehicleModel}</p>
        
        <p>If you need to make any changes to your appointment or have any questions, please contact us at <a href="mailto:systems@saasiple.in">systems@saasiple.in</a> or call us at +91 9876543210.</p>
        
        <p>We look forward to seeing you!</p>
        
        <div style="margin-top: 30px; font-size: 12px; color: #777; text-align: center;">
          <p>SparkX Auto Detailing</p>
          <p>123 Main Street, Bangalore, India</p>
          <p>Phone: +91 9876543210 | Email: systems@saasiple.in</p>
        </div>
      `,
    })

    return NextResponse.json({ message: "Appointment booked successfully" }, { status: 200 })
  } catch (error) {
    console.error("Failed to send email:", error)
    return NextResponse.json({ error: "Failed to book appointment" }, { status: 500 })
  }
}