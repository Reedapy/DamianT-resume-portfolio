'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Hero
 *
 * Magazine-cover layout:
 *   • Section label + horizontal rule (scale-in animation)
 *   • Giant Cormorant Garamond display name (clip/slide-up per line)
 *   • Role + institution subtitle
 *   • Second rule + tagline paragraph
 *   • Scroll indicator with pulsing vertical line
 *
 * All elements stagger in on mount — no scroll required.
 */
export default function Hero() {
  const topRuleRef    = useRef<HTMLSpanElement>(null)
  const labelRef      = useRef<HTMLDivElement>(null)
  const name1Ref      = useRef<HTMLDivElement>(null)
  const name2Ref      = useRef<HTMLDivElement>(null)
  const subtitleRef   = useRef<HTMLDivElement>(null)
  const bottomRuleRef = useRef<HTMLSpanElement>(null)
  const descRef       = useRef<HTMLParagraphElement>(null)
  const scrollRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })

    // 1. Top rule scales in from left
    tl.fromTo(
      topRuleRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 1.1, ease: 'expo.inOut' }
    )

    // 2. Section label fades up
    .fromTo(
      labelRef.current,
      { y: 12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.5'
    )

    // 3. First name line clips up from bottom
    .fromTo(
      name1Ref.current,
      { y: '110%' },
      { y: '0%', duration: 1.1, ease: 'expo.out' },
      '-=0.3'
    )

    // 4. Second name line (slight delay for cascade)
    .fromTo(
      name2Ref.current,
      { y: '110%' },
      { y: '0%', duration: 1.1, ease: 'expo.out' },
      '-=0.85'
    )

    // 5. Role / institution line
    .fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
      '-=0.5'
    )

    // 6. Bottom rule
    .fromTo(
      bottomRuleRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 1, ease: 'expo.inOut' },
      '-=0.4'
    )

    // 7. Tagline paragraph
    .fromTo(
      descRef.current,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )

    // 8. Scroll indicator
    .fromTo(
      scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.2'
    )
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 md:px-10 max-w-[1400px] mx-auto">

      {/* Top editorial rule */}
      <span ref={topRuleRef} className="editorial-line mb-5" />

      {/* Section label row */}
      <div ref={labelRef} className="flex items-center justify-between mb-3">
        <span className="font-syne text-[10px] md:text-xs tracking-[0.35em] uppercase text-[var(--warm-gray)]">
          01 / Portfolio
        </span>
        <span className="font-syne text-[10px] md:text-xs tracking-[0.25em] uppercase text-[var(--warm-gray)] hidden sm:block">
          Melbourne, VIC — {new Date().getFullYear()}
        </span>
      </div>

      {/* ── Headline — overflow hidden clips the lines for a slide-up reveal ── */}
      <div className="overflow-hidden leading-none mb-0">
        <div
          ref={name1Ref}
          className="font-cormorant font-light text-[clamp(4.5rem,13.5vw,14.5rem)] leading-[0.88] tracking-tight"
        >
          Damian
        </div>
      </div>
      <div className="overflow-hidden leading-none">
        <div
          ref={name2Ref}
          className="font-cormorant font-light text-[clamp(4.5rem,13.5vw,14.5rem)] leading-[0.88] tracking-tight"
        >
          Trajkovski
        </div>
      </div>

      {/* Subtitle row */}
      <div
        ref={subtitleRef}
        className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-7 mb-6"
      >
        <span className="font-syne text-xs sm:text-sm tracking-[0.18em] uppercase text-[var(--sienna)] font-medium">
          Software Engineer
        </span>
        <span className="hidden sm:block w-12 h-px bg-[var(--warm-gray)]" />
        <span className="font-syne text-xs sm:text-sm text-[var(--warm-gray)] tracking-wide">
          Master of Software Engineering · University of Melbourne
        </span>
      </div>

      {/* Bottom rule */}
      <span ref={bottomRuleRef} className="editorial-line mb-8" />

      {/* Tagline */}
      <p
        ref={descRef}
        className="font-cormorant text-xl md:text-2xl font-light text-[var(--warm-gray)] max-w-2xl leading-relaxed"
      >
        Software engineer graduate focused on building reliable, user‑friendly systems.
      </p>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="mt-16 flex items-center gap-4">
        <div className="w-px h-14 bg-[var(--ink)] opacity-40 animate-pulse" />
        <span className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--warm-gray)]">
          Scroll
        </span>
      </div>
    </section>
  )
}
