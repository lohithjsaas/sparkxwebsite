"use server"

import { revalidatePath } from "next/cache"
import nodemailer from "nodemailer"

type AppointmentData = {
  name: string
  email: string
  phone: string
  vehicleType: string
  vehicleMake: string
  vehicleModel: string
  service: string
  date: string
  time: string
  message: string
}

export async function bookAppointment(data: AppointmentData) {
  try {
    // Validate the data
    if (!data.name || !data.email || !data.phone || !data.service || !data.date || !data.time) {
      return {
        success: false,
        message: "Please fill in all required fields",
      }
    }

    // Check if the selected date is a Sunday
    const selectedDate = new Date(data.date)
    if (selectedDate.getDay() === 0) {
      return {
        success: false,
        message: "Sundays are not available for booking. Please select another date.",
      }
    }

    // Create a transporter using Gmail Workspace
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "your-email@yourdomain.com", // Replace with your Gmail Workspace email
        pass: process.env.EMAIL_PASSWORD || "your-app-password", // Replace with your app password
      },
    })

    // Format the date for better readability
    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    // Format the time for better readability
    const timeHour = Number.parseInt(data.time.split(":")[0])
    const formattedTime = timeHour > 12 ? `${timeHour - 12}:00 PM` : timeHour === 12 ? "12:00 PM" : `${timeHour}:00 AM`

    // Format the service name for better readability
    const serviceNames: Record<string, string> = {
      "premium-car-wash": "Premium Car Wash & Detailing",
      "bike-wash": "Bike Wash & Detailing",
      ppf: "Paint Protection Film (PPF)",
      "ceramic-coating": "Ceramic Coating Service",
      "body-wrapping": "Body Wrapping Services",
    }

    const serviceName = serviceNames[data.service] || data.service

    // Create email content
    const mailOptions = {
      from: process.env.EMAIL_USER || "your-email@yourdomain.com",
      to: process.env.ADMIN_EMAIL || "admin@yourdomain.com", // Replace with the recipient email
      subject: `New Appointment Booking: ${data.name} - ${formattedDate}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h1 style="color: #d32f2f; text-align: center; margin-bottom: 20px;">New Appointment Booking</h1>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="margin-top: 0; color: #333;">Appointment Details</h2>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${formattedTime}</p>
            <p><strong>Service:</strong> ${serviceName}</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="margin-top: 0; color: #333;">Customer Information</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="margin-top: 0; color: #333;">Vehicle Information</h2>
            <p><strong>Type:</strong> ${data.vehicleType}</p>
            <p><strong>Make:</strong> ${data.vehicleMake}</p>
            <p><strong>Model:</strong> ${data.vehicleModel}</p>
          </div>
          
          ${
            data.message
              ? `
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <h2 style="margin-top: 0; color: #333;">Additional Information</h2>
            <p>${data.message}</p>
          </div>
          `
              : ""
          }
          
          <p style="text-align: center; margin-top: 30px; color: #666; font-size: 14px;">
            This is an automated email from SparkX Auto Detailing. Please do not reply to this email.
          </p>
        </div>
      `,
    }

    // Send confirmation email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER || "your-email@yourdomain.com",
      to: data.email,
      subject: "Your Appointment Confirmation - SparkX Auto Detailing",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h1 style="color: #d32f2f; text-align: center; margin-bottom: 20px;">Appointment Confirmation</h1>
          
          <p style="font-size: 16px;">Dear ${data.name},</p>
          
          <p style="font-size: 16px;">Thank you for booking an appointment with SparkX Auto Detailing. We have received your booking and are looking forward to serving you.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #333;">Your Appointment Details</h2>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${formattedTime}</p>
            <p><strong>Service:</strong> ${serviceName}</p>
            <p><strong>Vehicle:</strong> ${data.vehicleMake} ${data.vehicleModel} (${data.vehicleType})</p>
          </div>
          
          <p style="font-size: 16px;">If you need to make any changes to your appointment, please contact us at <a href="tel:+1234567890">123-456-7890</a> or reply to this email.</p>
          
          <p style="font-size: 16px;">We look forward to seeing you!</p>
          
          <p style="font-size: 16px;">Best regards,<br>The SparkX Team</p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; font-size: 14px;">
              SparkX Auto Detailing<br>
              123 Main Street, Bangalore<br>
              <a href="tel:+1234567890">123-456-7890</a> | <a href="mailto:info@sparkx.com">info@sparkx.com</a>
            </p>
          </div>
        </div>
      `,
    }

    try {
      // Send email to admin
      await transporter.sendMail(mailOptions)

      // Send confirmation email to customer
      await transporter.sendMail(customerMailOptions)

      console.log("Emails sent successfully")
    } catch (emailError) {
      console.error("Error sending email:", emailError)
      // Continue with the function even if email fails
      // In a production environment, you might want to handle this differently
    }

    // Log the appointment data
    console.log("Appointment booked:", data)

    // Revalidate the appointments page
    revalidatePath("/book-appointment")

    return {
      success: true,
      message: "Appointment booked successfully",
    }
  } catch (error) {
    console.error("Error booking appointment:", error)
    return {
      success: false,
      message: "Failed to book appointment. Please try again.",
    }
  }
}