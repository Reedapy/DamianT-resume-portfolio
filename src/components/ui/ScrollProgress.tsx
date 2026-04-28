'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * ScrollProgress
 *
 * A 2px sienna bar fixed to the top of the viewport that scales
 * from 0→1 on the X axis as the user scrolls from top to bottom.
 * Driven by GSAP ScrollTrigger with scrub for buttery smoothness.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return <div ref={barRef} className="scroll-progress" />
}
