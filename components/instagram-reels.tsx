"use client"

import { useEffect, useRef } from "react"
import { Instagram } from "lucide-react"
import { AutoScrollRow } from "@/components/auto-scroll-row"
import type { InstagramReel } from "@/lib/instagram"

const TILE_SIZES = {
  default: "w-[64vw] max-w-[280px] sm:w-[250px] lg:w-[280px] rounded-[20px]",
  compact: "w-[40vw] max-w-[200px] sm:w-[170px] lg:w-[190px] rounded-[16px]",
}

type ReelSize = keyof typeof TILE_SIZES

function ReelTile({ reel, size }: { reel: InstagramReel; size: ReelSize }) {
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
      className={`group relative block shrink-0 ${TILE_SIZES[size]} overflow-hidden bg-muted aspect-[9/16] ring-1 ring-white/[0.08] shadow-[0_10px_28px_-18px_rgba(0,0,0,0.9)] transition-[transform,box-shadow] duration-300 ease-out md:hover:-translate-y-1 md:hover:ring-brand/30 md:hover:shadow-[0_24px_55px_-22px_rgba(225,37,27,0.35)]`}
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
      {reel.caption && size === "default" && (
        <p className="absolute bottom-0 inset-x-0 p-4 text-sm leading-snug text-white/90 line-clamp-2">
          {reel.caption}
        </p>
      )}
      <span className="sr-only">Watch on Instagram</span>
    </a>
  )
}

export function InstagramReels({ reels, size = "default" }: { reels: InstagramReel[]; size?: ReelSize }) {
  return (
    <AutoScrollRow itemLabel="reels">
      {reels.map((reel) => (
        <ReelTile key={reel.id} reel={reel} size={size} />
      ))}
    </AutoScrollRow>
  )
}
