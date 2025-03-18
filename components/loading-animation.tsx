"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Sparkles } from "lucide-react"

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500">
      <div className="flex flex-col items-center">
        <div className="relative animate-pulse mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Your%20paragraph%20text-GGRhFv9YTEF0GNWR5JcKcm1t5d1B8T.png"
            alt="SparkX Logo"
            width={800}
            height={280}
            className="h-64 w-auto"
            priority
          />
          <div className="absolute -right-4 -top-4">
            <Sparkles className="h-12 w-12 text-primary animate-ping" />
          </div>
        </div>
        <p className="text-primary font-medium text-xl mb-8">Premium Auto Detailing</p>

        {/* SVG Circular Loading Animation */}
        <div className="relative">
          <svg className="circular-spinner" width="50" height="50" viewBox="0 0 50 50">
            <circle
              className="circular-spinner-path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
            />
          </svg>

          {/* Small rotating sparkles around the circle */}
          <div className="absolute top-0 left-0 w-full h-full animate-spin" style={{ animationDuration: "3s" }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
          </div>

          <div
            className="absolute top-0 left-0 w-full h-full animate-spin"
            style={{ animationDuration: "3s", animationDelay: "0.75s" }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
          </div>

          <div
            className="absolute top-0 left-0 w-full h-full animate-spin"
            style={{ animationDuration: "3s", animationDelay: "1.5s" }}
          >
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
          </div>

          <div
            className="absolute top-0 left-0 w-full h-full animate-spin"
            style={{ animationDuration: "3s", animationDelay: "2.25s" }}
          >
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
