'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { personal } from '@/lib/data'
import type { FormStatus } from '@/types'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headerRef   = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const formRef     = useRef<HTMLDivElement>(null)

  const [status, setStatus]       = useState<FormStatus>('idle')
  const [name, setName]           = useState('')
  const [email, setEmail]         = useState('')
  const [message, setMessage]     = useState('')

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = { toggleActions: 'play none none none' as const }

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: headerRef.current, start: 'top 85%', ...trigger } }
      )

      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.3, ease: 'power4.out', scrollTrigger: { trigger: headlineRef.current, start: 'top 85%', ...trigger } }
      )

      gsap.fromTo(
        formRef.current?.children ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: { trigger: formRef.current, start: 'top 80%', ...trigger },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // ── Formspree integration ─────────────────────────────────────────────────
    // 1. Sign up at https://formspree.io
    // 2. Create a form and replace YOUR_FORM_ID below
    // 3. Remove the setTimeout simulation
    //
    // try {
    //   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //     body: JSON.stringify({ name, email, message }),
    //   })
    //   setStatus(res.ok ? 'sent' : 'error')
    // } catch {
    //   setStatus('error')
    // }
    // ─────────────────────────────────────────────────────────────────────────

    // Simulated send (remove once Formspree is connected)
    await new Promise((r) => setTimeout(r, 1400))
    setStatus('sent')
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 md:py-36 px-6 md:px-10 max-w-[1400px] mx-auto"
    >
      {/* ── Section header ── */}
      <div ref={headerRef} className="flex items-center gap-6 mb-16">
        <span className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--warm-gray)]">05</span>
        <span className="flex-1 editorial-line" />
        <span className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--warm-gray)]">Contact</span>
      </div>

      {/* ── Headline ── */}
      <h2
        ref={headlineRef}
        className="font-cormorant text-[clamp(3rem,9vw,9.5rem)] font-light leading-[0.9] mb-8"
      >
        Let&apos;s build<br />
        something<br />
        <em className="text-[var(--sienna)]">great.</em>
      </h2>

      <a
        href={`mailto:${personal.email}`}
        className="inline-block font-syne text-sm tracking-[0.12em] text-[var(--sienna)] hover:underline underline-offset-4 mb-20 mt-4"
      >
        {personal.email}
      </a>

      {/* ── Two columns: form + socials ── */}
      <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-10"
          noValidate
        >
          {/* Name */}
          <div className="border-b border-[var(--ink)] pb-3 group">
            <label className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--warm-gray)] block mb-2">
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full bg-transparent font-cormorant text-2xl focus:outline-none placeholder:text-[var(--light-gray)] text-[var(--ink)]"
            />
          </div>

          {/* Email */}
          <div className="border-b border-[var(--ink)] pb-3">
            <label className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--warm-gray)] block mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-transparent font-cormorant text-2xl focus:outline-none placeholder:text-[var(--light-gray)] text-[var(--ink)]"
            />
          </div>

          {/* Message */}
          <div className="border-b border-[var(--ink)] pb-3">
            <label className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--warm-gray)] block mb-2">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project or opportunity..."
              className="w-full bg-transparent font-cormorant text-2xl focus:outline-none placeholder:text-[var(--light-gray)] text-[var(--ink)] resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex items-center gap-6">
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="group inline-flex items-center gap-4 font-syne text-[11px] tracking-[0.3em] uppercase border border-[var(--ink)] px-8 py-4 hover:bg-[var(--ink)] hover:text-[var(--cream)] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === 'idle'    && <>Send Message <span className="group-hover:translate-x-2 transition-transform duration-300">→</span></>}
              {status === 'sending' && 'Sending…'}
              {status === 'sent'    && '✓ Message Sent'}
              {status === 'error'   && 'Something went wrong'}
            </button>

            {status === 'sent' && (
              <p className="font-syne text-xs text-[var(--warm-gray)]">
                I&apos;ll get back to you shortly.
              </p>
            )}
          </div>
        </form>

        {/* Social links + direct contact */}
        <div className="space-y-10">
          <div>
            <p className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--sienna)] mb-6">
              Find me online
            </p>
            <div className="divide-y divide-[var(--light-gray)]">
              {[
                { label: 'LinkedIn', href: personal.linkedin },
                { label: 'GitHub',   href: personal.github   },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 hover:text-[var(--sienna)] transition-colors duration-300"
                >
                  <span className="font-cormorant text-2xl md:text-3xl font-light">
                    {label}
                  </span>
                  <span className="text-[var(--warm-gray)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-lg">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-syne text-[10px] tracking-[0.35em] uppercase text-[var(--sienna)] mb-4">
              Direct
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${personal.email}`}
                className="block font-syne text-sm text-[var(--warm-gray)] hover:text-[var(--ink)] transition-colors"
              >
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="block font-syne text-sm text-[var(--warm-gray)] hover:text-[var(--ink)] transition-colors"
              >
                {personal.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
