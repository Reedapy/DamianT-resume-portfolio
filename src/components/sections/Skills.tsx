'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills, allSkills } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: headerRef.current, start: 'top 85%' } }
      )

      // Stagger each skill column in
      const cols = gridRef.current?.querySelectorAll('.skill-col')
      cols?.forEach((col, i) => {
        gsap.fromTo(
          col,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            delay: i * 0.09,
            scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Duplicate the skill list to create a seamless loop
  const tickerItems = [...allSkills, ...allSkills]

  return (
    <section id="skills" ref={sectionRef} className="py-28 md:py-36 overflow-hidden">
      {/* ── Section header ── */}
      <div
        ref={headerRef}
        className="flex items-center gap-6 mb-16 px-6 md:px-10 max-w-[1400px] mx-auto"
      >
        <span className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--warm-gray)]">04</span>
        <span className="flex-1 editorial-line" />
        <span className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--warm-gray)]">Skills</span>
      </div>

      {/* ── Marquee ticker ── */}
      <div className="overflow-hidden border-y border-[var(--light-gray)] py-4 mb-20 md:mb-28">
        <div className="marquee-track">
          {tickerItems.map((skill, i) => (
            <span
              key={i}
              className="inline-flex items-center font-cormorant text-2xl md:text-3xl font-light text-[var(--warm-gray)] mr-10"
            >
              {skill}
              <span className="ml-10 text-[var(--sienna)]">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Skill grid ── */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-6 md:px-10 max-w-[1400px] mx-auto"
      >
        {Object.entries(skills).map(([category, items], colIdx) => (
          <div
            key={category}
            className={[
              'skill-col pl-5 md:pl-7 py-2',
              colIdx > 0 ? 'border-l border-[var(--light-gray)]' : '',
            ].join(' ')}
          >
            <h3 className="font-syne text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-[var(--sienna)] mb-6">
              {category}
            </h3>
            <ul className="space-y-3">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="font-cormorant text-base md:text-lg font-light text-[var(--ink)] leading-snug"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
