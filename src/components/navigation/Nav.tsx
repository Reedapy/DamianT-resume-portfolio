'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'

const NAV_LINKS = [
  { label: 'About',   href: '#about'   },
  { label: 'Work',    href: '#work'    },
  { label: 'Skills',  href: '#skills'  },
  { label: 'Contact', href: '#contact' },
] as const

/**
 * Nav
 *
 * Fixed navigation with:
 *   • Monogram logo (DT) that scrolls back to top
 *   • Desktop links + "Hire Me" CTA
 *   • Responsive hamburger → fullscreen menu on mobile
 *   • Transparent → bordered/frosted transition on scroll
 */
export default function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Entry animation — slide down from -100%
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.8 }
    )

    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'py-3 bg-[var(--cream)]/95 backdrop-blur-sm border-b border-[var(--ink)]/8'
            : 'py-6',
        ].join(' ')}
        style={{ opacity: 0 }} // GSAP animates this in
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Monogram */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="font-cormorant text-xl font-semibold tracking-[0.25em] uppercase"
          >
            DT
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-syne text-[11px] tracking-[0.22em] uppercase text-[var(--warm-gray)] hover:text-[var(--ink)] transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}

            <a
              href="mailto:damiantrajkovski@yahoo.com.au"
              className="font-syne text-[11px] tracking-[0.22em] uppercase border border-[var(--ink)] px-5 py-2.5 hover:bg-[var(--ink)] hover:text-[var(--cream)] transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={[
                'block h-px bg-[var(--ink)] transition-all duration-300 origin-center',
                menuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6',
              ].join(' ')}
            />
            <span
              className={[
                'block h-px bg-[var(--ink)] transition-all duration-300',
                menuOpen ? 'w-0 opacity-0' : 'w-6',
              ].join(' ')}
            />
            <span
              className={[
                'block h-px bg-[var(--ink)] transition-all duration-300 origin-center',
                menuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6',
              ].join(' ')}
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={[
          'fixed inset-0 z-40 bg-[var(--cream)] flex flex-col justify-center px-8 transition-all duration-500 md:hidden',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <div className="space-y-2">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block font-cormorant text-[clamp(3rem,12vw,5rem)] font-light leading-tight hover:text-[var(--sienna)] transition-colors text-left"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--light-gray)]">
          <a
            href="mailto:damiantrajkovski@yahoo.com.au"
            className="font-syne text-sm text-[var(--warm-gray)] tracking-wide"
          >
            damiantrajkovski@yahoo.com.au
          </a>
        </div>
      </div>
    </>
  )
}
