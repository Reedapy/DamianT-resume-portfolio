'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * SmoothScroll
 *
 * Wraps the app in Lenis smooth scrolling, connected to GSAP's ticker and
 * ScrollTrigger so all scroll-driven animations stay perfectly in sync.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      // Refined ease — feels weighty but not sluggish
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Keep GSAP ScrollTrigger in sync with Lenis scroll position
    lenis.on('scroll', ScrollTrigger.update)

    // Drive Lenis via GSAP's RAF loop — this avoids double-RAF issues
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Prevent GSAP from compensating for lag (Lenis handles this)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
