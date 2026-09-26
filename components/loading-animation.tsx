"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export const LOADER_DURATION_MS = 2300

let loaderFinished = false
// Lets page intros (e.g. the home hero) wait for the loading screen on the first visit only.
export const hasLoaderFinished = () => loaderFinished

export function LoadingAnimation() {
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading")

  useEffect(() => {
    const leave = setTimeout(() => {
      loaderFinished = true
      setPhase("leaving")
    }, LOADER_DURATION_MS)
    const done = setTimeout(() => setPhase("done"), LOADER_DURATION_MS + 700)
    return () => {
      clearTimeout(leave)
      clearTimeout(done)
    }
  }, [])

  if (phase === "done") return null

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-background transition-all duration-700 ease-out ${
        phase === "leaving" ? "opacity-0 scale-[1.02]" : "opacity-100"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(40% 40% at 50% 55%, rgba(225,37,27,0.14), transparent 70%)" }}
      />
      <div className="relative flex flex-col items-center px-6">
        <div className="hero-rise mb-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Your%20paragraph%20text-GGRhFv9YTEF0GNWR5JcKcm1t5d1B8T.png"
            alt="SparkX Logo"
            width={800}
            height={280}
            className="h-40 w-auto sm:h-56 md:h-64"
            priority
          />
        </div>
        <p
          className="hero-rise mb-10 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand md:text-[12px]"
          style={{ animationDelay: "0.2s" }}
        >
          Premium Auto Detailing
        </p>

        <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/10 md:w-64">
          <div className="loader-bar h-full w-full rounded-full bg-gradient-to-r from-brand to-[#ff8a80]" />
        </div>
      </div>
    </div>
  )
}
