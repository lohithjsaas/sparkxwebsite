"use client"

import type React from "react"
import { Children, useEffect, useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const AUTO_SCROLL_PX_PER_SEC = 40
const RESUME_DELAY_MS = 2500

const arrowClass =
  "grid h-12 w-12 place-items-center rounded-full bg-white/[0.05] text-white ring-1 ring-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand hover:ring-brand active:scale-95"

// Single-row carousel that scrolls itself in a seamless loop and pauses while the user
// hovers, touches, drags or wheels it. Children are rendered twice to make the loop seamless.
export function AutoScrollRow({
  children,
  itemLabel = "items",
  speed = AUTO_SCROLL_PX_PER_SEC,
}: {
  children: React.ReactNode
  itemLabel?: string
  speed?: number
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedUntil = useRef(0)
  const hovering = useRef(false)
  const drag = useRef<{ startX: number; startScroll: number; moved: boolean } | null>(null)
  const suppressClick = useRef(false)
  const items = Children.toArray(children)

  // When we pass the first copy we jump back by its width for a seamless loop.
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
        pos += speed * dt
        const half = el.scrollWidth / 2
        if (half > 0 && pos >= half) pos -= half
        el.scrollLeft = pos
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [items.length, speed])

  const scrollByItems = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    pause()
    const item = el.firstElementChild
    const step = item ? item.getBoundingClientRect().width + 16 : 300
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
        className="no-scrollbar flex items-stretch gap-3 overflow-x-auto cursor-grab active:cursor-grabbing select-none px-4 py-2 sm:gap-4 md:px-6 lg:px-8"
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
        {items}
        {/* Second copy for the loop; hidden from screen readers so content isn't announced twice. */}
        {items.map((child, i) => (
          <div key={`dup-${i}`} aria-hidden="true" className="contents">
            {child}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3 px-4 md:mt-8 md:justify-end md:px-6 lg:px-8">
        <button type="button" onClick={() => scrollByItems(-1)} aria-label={`Previous ${itemLabel}`} className={arrowClass}>
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button type="button" onClick={() => scrollByItems(1)} aria-label={`Next ${itemLabel}`} className={arrowClass}>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
