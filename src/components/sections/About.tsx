'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { personal, education } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headerRef   = useRef<HTMLDivElement>(null)
  const quoteRef    = useRef<HTMLQuoteElement>(null)
  const bioRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const triggerDefaults = { start: 'top 82%', toggleActions: 'play none none none' }

      // Section header line + labels
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: headerRef.current, ...triggerDefaults } }
      )

      // Pull quote - bold, cinematic
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.3, ease: 'power4.out', scrollTrigger: { trigger: quoteRef.current, ...triggerDefaults } }
      )

      // Bio + detail columns
      gsap.fromTo(
        bioRef.current?.children ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: { trigger: bioRef.current, ...triggerDefaults },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 md:py-36 px-6 md:px-10 max-w-[1400px] mx-auto"
    >
      {/* ── Section header ── */}
      <div
        ref={headerRef}
        className="flex items-center gap-6 mb-16 md:mb-20"
      >
        <span className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--warm-gray)]">
          02
        </span>
        <span className="flex-1 editorial-line" />
        <span className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--warm-gray)]">
          About
        </span>
      </div>

      {/* ── Pull quote ── */}
      <blockquote ref={quoteRef} className="mb-20 md:mb-28">
        <p className="font-cormorant text-[clamp(2.2rem,5vw,5rem)] font-light leading-[1.1] max-w-5xl text-[var(--ink)]">
          "Learning, building, {' '}
          <em className="text-[var(--sienna)]">improving.</em>{' '}"
        </p>
      </blockquote>

      {/* ── Two-column content ── */}
      <div
        ref={bioRef}
        className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-24"
      >
        {/* Left - bio text */}
        <div>
          <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed text-[var(--ink)] mb-7">
            {personal.bio}
          </p>
          <p className="font-syne text-sm text-[var(--warm-gray)] leading-relaxed mb-7">
            My approach centres on systems thinking - understanding how backend logic,
            user experience and business goals interconnect. Whether optimising Docker
            workflows, designing accessible RESTful APIs or delivering real-time BLE
            data pipelines, I bring methodical precision and a commitment to continuous
            improvement.
          </p>
          <p className="font-syne text-sm text-[var(--warm-gray)] leading-relaxed">
            Outside of engineering I coached Coding, LEGO Robotics, Chess and soccer - experiences that
            have strengthened my ability to communicate complex ideas simply, lead with
            patience and adapt rapidly under pressure.
          </p>
        </div>

        {/* Right - details */}
        <div className="space-y-10">
          {/* Education */}
          <div>
            <h3 className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--sienna)] mb-5">
              Education
            </h3>
            <div className="space-y-0 divide-y divide-[var(--light-gray)]">
              {education.map((edu) => (
                <div key={edu.degree} className="py-4">
                  <p className="font-cormorant text-lg font-medium leading-snug">
                    {edu.degree}
                  </p>
                  <p className="font-syne text-xs text-[var(--warm-gray)] mt-1">
                    {edu.institution}
                  </p>
                  <p className="font-syne text-xs text-[var(--warm-gray)]">
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <h3 className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--sienna)] mb-5">
              Details
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Based in',      value: personal.location },
                { label: 'Available for', value: 'Full-time roles' },
                { label: 'Languages',     value: 'English · Macedonian' },
                { label: 'GitHub (Work/Uni)', value: 'damiantrajkovski', href: personal.githubWork },
                { label: 'GitHub (Personal)', value: 'Reedapy', href: personal.githubPersonal },
                { label: 'LinkedIn',      value: '/in/damian-trajkovski', href: personal.linkedin },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex gap-3 items-baseline">
                  <span className="font-syne text-xs text-[var(--warm-gray)] min-w-[90px]">
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-syne text-sm text-[var(--ink)] hover:text-[var(--sienna)] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="font-syne text-sm text-[var(--ink)]">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--sienna)] mb-5">
              Awards
            </h3>
            <div className="py-3 border-t border-[var(--light-gray)]">
              <p className="font-cormorant text-lg font-medium">Galway Maths Olympiad</p>
              <p className="font-syne text-xs text-[var(--warm-gray)] mt-1">Winner · 2016</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
