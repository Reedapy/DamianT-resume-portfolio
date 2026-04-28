'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Cursor
 *
 * Replaces the native cursor with a two-part custom cursor:
 *   • A small sienna dot that tracks exactly with the mouse
 *   • A larger ring that follows with a slight lag
 *
 * On hovering interactive elements the ring scales up and softens.
 * Hidden automatically on touch devices via CSS.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Precise dot — zero duration, tracks exactly
    const onMove = (e: MouseEvent) => {
      gsap.set(dot, { x: e.clientX, y: e.clientY })
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    // Expand ring when hovering interactive elements
    const onEnterInteractive = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [data-cursor-expand]')) {
        gsap.to(ring, {
          scale: 2.4,
          opacity: 0.5,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }
    }

    const onLeaveInteractive = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [data-cursor-expand]')) {
        gsap.to(ring, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }
    }

    // Show cursor when it enters the viewport
    const onEnterWindow = () =>
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 })
    const onLeaveWindow = () =>
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 })

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnterInteractive)
    document.addEventListener('mouseout', onLeaveInteractive)
    document.addEventListener('mouseenter', onEnterWindow)
    document.addEventListener('mouseleave', onLeaveWindow)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnterInteractive)
      document.removeEventListener('mouseout', onLeaveInteractive)
      document.removeEventListener('mouseenter', onEnterWindow)
      document.removeEventListener('mouseleave', onLeaveWindow)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} />
      <div ref={ringRef} className="cursor-follower" style={{ opacity: 0 }} />
    </>
  )
}
