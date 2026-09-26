"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
const isCoarsePointer = () => window.matchMedia("(pointer: coarse)").matches

declare global {
  interface Window {
    __lenis?: Lenis
  }
}

// Lenis smooth scrolling driven by the GSAP ticker so ScrollTrigger stays in sync.
// Touch devices keep native scrolling (Lenis only smooths wheel input by default).
export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (prefersReducedMotion()) return
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    })
    window.__lenis = lenis
    lenis.on("scroll", ScrollTrigger.update)
    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      window.__lenis = undefined
    }
  }, [])

  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true })
  }, [pathname])

  return null
}

// Keeps only elements that are not nested inside another element of the same list.
function topLevel<T extends Element>(els: T[]): T[] {
  return els.filter((el) => !els.some((other) => other !== el && other.contains(el)))
}

// Section reveal timeline: label → heading → subtext → cards/images/CTAs (staggered).
// Every <section> after the page's first one is animated automatically, as is any [data-reveal] block.
// Elements marked [data-parallax] drift with scroll on desktop.
export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const main = document.querySelector("main")
    if (!main || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const candidates = [
        ...Array.from(main.querySelectorAll<HTMLElement>("section")).slice(1),
        ...Array.from(main.querySelectorAll<HTMLElement>("[data-reveal]")),
      ]
      const blocks = topLevel(Array.from(new Set(candidates)))

      for (const block of blocks) {
        const labels = Array.from(block.querySelectorAll<HTMLElement>(".eyebrow, .pill"))
        const headings = Array.from(block.querySelectorAll<HTMLElement>("h2"))
        const subtexts = headings
          .map((h) => h.nextElementSibling)
          .filter((el): el is HTMLElement => el instanceof HTMLParagraphElement)
        const taken = [...labels, ...headings, ...subtexts]
        const cards = topLevel(
          Array.from(block.querySelectorAll<HTMLElement>(".grid > *, [data-reveal-item]")).filter(
            (el) => !taken.some((t) => el === t || el.contains(t) || t.contains(el)),
          ),
        )
        const ctas = Array.from(block.querySelectorAll<HTMLElement>(".btn-primary, .btn-outline, .btn-brand")).filter(
          (el) => !cards.some((c) => c.contains(el)),
        )

        if (!labels.length && !headings.length && !cards.length) {
          gsap.fromTo(
            block,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: block, start: "top 85%", once: true },
              clearProps: "transform",
            },
          )
          continue
        }

        gsap.set(labels, { opacity: 0, y: 30 })
        gsap.set(headings, { opacity: 0, y: 60 })
        gsap.set(subtexts, { opacity: 0, y: 40 })
        gsap.set([...cards, ...ctas], { opacity: 0, y: 60, scale: 0.97 })

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: { trigger: block, start: "top 82%", once: true },
        })
        tl.to(labels, { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 }, 0)
          .to(headings, { opacity: 1, y: 0, duration: 1, ease: "expo.out" }, "-=0.45")
          .to(subtexts, { opacity: 1, y: 0, duration: 0.85 }, "-=0.7")
          .to(
            [...cards, ...ctas],
            { opacity: 1, y: 0, scale: 1, duration: 0.95, stagger: 0.08, clearProps: "transform" },
            "-=0.55",
          )
      }

      if (!isCoarsePointer()) {
        main.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          const amount = Number(el.dataset.parallax) || 10
          gsap.set(el, { scale: 1 + amount / 100, transformOrigin: "50% 50%" })
          gsap.fromTo(
            el,
            { yPercent: amount / 2 },
            {
              yPercent: -amount / 2,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6, invalidateOnRefresh: true },
            },
          )
        })
      }
    }, main)

    // Late-loading images change layout; recalculate trigger positions once they're in.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener("load", refresh)
    const t = setTimeout(refresh, 800)

    return () => {
      window.removeEventListener("load", refresh)
      clearTimeout(t)
      ctx.revert()
    }
  }, [pathname])

  return null
}
