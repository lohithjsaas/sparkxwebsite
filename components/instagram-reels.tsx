"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { ArrowLeft, ArrowRight, Instagram } from "lucide-react"
import type { InstagramReel } from "@/lib/instagram"

const AUTO_SCROLL_PX_PER_SEC = 40
const RESUME_DELAY_MS = 2500

function ReelTile({ reel }: { reel: InstagramReel }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Only play reels that are on screen so the page doesn't decode every video at once.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={reel.permalink}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      className="group relative block shrink-0 w-[64vw] max-w-[280px] sm:w-[250px] lg:w-[280px] overflow-hidden rounded-[20px] bg-muted aspect-[9/16] ring-1 ring-white/[0.08] shadow-[0_10px_28px_-18px_rgba(0,0,0,0.9)] transition-[transform,box-shadow] duration-300 ease-out md:hover:-translate-y-1 md:hover:ring-brand/30 md:hover:shadow-[0_24px_55px_-22px_rgba(225,37,27,0.35)]"
    >
      <video
        ref={videoRef}
        src={reel.mediaUrl}
        poster={reel.thumbnailUrl}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={reel.caption ? Array.from(reel.caption).slice(0, 100).join("") : "SparkX Detailing reel"}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      <span className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-black/40 ring-1 ring-white/15 backdrop-blur-md">
        <Instagram className="h-4 w-4 text-white" />
      </span>
      {reel.caption && (
        <p className="absolute bottom-0 inset-x-0 p-4 text-sm leading-snug text-white/90 line-clamp-2">
          {reel.caption}
        </p>
      )}
      <span className="sr-only">Watch on Instagram</span>
    </a>
  )
}

export function InstagramReels({ reels }: { reels: InstagramReel[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedUntil = useRef(0)
  const hovering = useRef(false)
  const drag = useRef<{ startX: number; startScroll: number; moved: boolean } | null>(null)
  const suppressClick = useRef(false)

  // The list is rendered twice; when we pass the first copy we jump back by its width for a seamless loop.
  const wrap = (el: HTMLDivElement) => {
    const half = el.scrollWidth / 2
    if (half <= 0) return
    const shift = el.scrollLeft >= half ? -half : el.scrollLeft <= 0 ? half : 0
    if (shift === 0) return
    el.scrollLeft += shift
    if (drag.current) drag.current.startScroll += shift
  }

  const pause = () => {
    pausedUntil.current = performance.now() + RESUME_DELAY_MS
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let pos = el.scrollLeft
    let last = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      if (hovering.current || drag.current || now < pausedUntil.current) {
        pos = el.scrollLeft
      } else {
        pos += AUTO_SCROLL_PX_PER_SEC * dt
        const half = el.scrollWidth / 2
        if (half > 0 && pos >= half) pos -= half
        el.scrollLeft = pos
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [reels.length])

  const scrollByTiles = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    pause()
    const tile = el.querySelector("a")
    const step = tile ? tile.getBoundingClientRect().width + 16 : 300
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" })
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return
    drag.current = { startX: e.clientX, startScroll: trackRef.current!.scrollLeft, moved: false }
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current
    const el = trackRef.current
    if (!d || !el) return
    const dx = e.clientX - d.startX
    if (Math.abs(dx) > 5) d.moved = true
    el.scrollLeft = d.startScroll - dx
  }

  const endDrag = () => {
    if (drag.current?.moved) suppressClick.current = true
    drag.current = null
    pause()
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="no-scrollbar flex gap-3 overflow-x-auto cursor-grab active:cursor-grabbing select-none px-4 py-2 sm:gap-4 md:px-6 lg:px-8"
        onScroll={(e) => wrap(e.currentTarget)}
        onMouseEnter={() => (hovering.current = true)}
        onMouseLeave={() => {
          hovering.current = false
          if (drag.current) endDrag()
        }}
        onTouchStart={pause}
        onTouchEnd={pause}
        onWheel={pause}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onClickCapture={(e) => {
          if (suppressClick.current) {
            e.preventDefault()
            e.stopPropagation()
            suppressClick.current = false
          }
        }}
      >
        {[...reels, ...reels].map((reel, i) => (
          <ReelTile key={`${reel.id}-${i}`} reel={reel} />
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3 px-4 md:mt-8 md:justify-end md:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollByTiles(-1)}
          aria-label="Previous reels"
          className="grid h-12 w-12 place-items-center rounded-full bg-white/[0.05] text-white ring-1 ring-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand hover:ring-brand active:scale-95"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByTiles(1)}
          aria-label="Next reels"
          className="grid h-12 w-12 place-items-center rounded-full bg-white/[0.05] text-white ring-1 ring-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand hover:ring-brand active:scale-95"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
