"use client"

import type React from "react"
import { useEffect, useRef } from "react"

// Muted, looping background-style video that only plays while on screen (saves battery/data on
// phones). Visitors who prefer reduced motion see the poster frame instead.
export function LoopVideo({
  src,
  poster,
  label,
  className = "",
  ...rest
}: {
  src: string
  poster: string
  label: string
  className?: string
} & Omit<React.VideoHTMLAttributes<HTMLVideoElement>, "src" | "poster">) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.2 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      className={className}
      {...rest}
    />
  )
}
