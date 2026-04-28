'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const listRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: headerRef.current, start: 'top 85%' } }
      )

      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headlineRef.current, start: 'top 85%' } }
      )

      const rows = listRef.current?.querySelectorAll('.project-row')
      rows?.forEach((row, i) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: i * 0.08,
            scrollTrigger: { trigger: row, start: 'top 88%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-28 md:py-36 px-6 md:px-10 max-w-[1400px] mx-auto"
    >
      {/* ── Section header ── */}
      <div ref={headerRef} className="flex items-center gap-6 mb-12 md:mb-16">
        <span className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--warm-gray)]">03</span>
        <span className="flex-1 editorial-line" />
        <span className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--warm-gray)]">Work</span>
      </div>

      <h2
        ref={headlineRef}
        className="font-cormorant text-[clamp(2rem,4.5vw,4.5rem)] font-light leading-tight mb-16 max-w-2xl"
      >
        Selected Projects<br />
        <span className="text-[var(--warm-gray)]">& Experience</span>
      </h2>

      {/* ── Project list ── */}
      <div ref={listRef} className="divide-y divide-[var(--light-gray)]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-row group py-10 md:py-12"
          >
            <div className="grid grid-cols-[40px_1fr] md:grid-cols-[56px_1fr_auto] gap-x-6 md:gap-x-10 items-start">

              {/* Number */}
              <span className="font-syne text-[10px] tracking-[0.25em] text-[var(--warm-gray)] pt-2 md:pt-3">
                {project.id}
              </span>

              {/* Content */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-3">
                  <h3 className="font-cormorant text-2xl md:text-3xl font-medium group-hover:text-[var(--sienna)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="font-syne text-[11px] text-[var(--warm-gray)] tracking-wide">
                    {project.client} · {project.period}
                  </span>
                </div>

                {/* Role badge */}
                <span className="inline-block font-syne text-[10px] tracking-[0.2em] uppercase text-[var(--sienna)] mb-4">
                  {project.role}
                </span>

                <p className="font-syne text-sm text-[var(--warm-gray)] leading-relaxed max-w-xl mb-5">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights.length > 0 && (
                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.map((h) => (
                      <li key={h} className="font-syne text-xs text-[var(--warm-gray)] flex items-start gap-3">
                        <span className="text-[var(--sienna)] mt-0.5 flex-shrink-0">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Stack tags — visible on mobile */}
                <div className="flex flex-wrap gap-2 md:hidden">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-syne text-[10px] tracking-[0.15em] uppercase border border-[var(--light-gray)] px-3 py-1 text-[var(--warm-gray)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && project.id !== '03' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-syne text-[11px] tracking-[0.2em] uppercase text-[var(--ink)] hover:text-[var(--sienna)] transition-colors mt-4"
                  >
                    View on GitHub
                    <span className="text-base leading-none">↗</span>
                  </a>
                )}
              </div>

              {/* Stack tags — desktop only, right column */}
              <div className="hidden md:flex flex-col gap-2 pt-1 max-w-[200px]">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-syne text-[10px] tracking-[0.15em] uppercase border border-[var(--light-gray)] px-3 py-1.5 text-[var(--warm-gray)] text-center group-hover:border-[var(--ink)]/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
