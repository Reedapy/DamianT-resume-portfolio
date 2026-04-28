import { personal } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--light-gray)] py-8 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="font-syne text-[11px] text-[var(--warm-gray)] tracking-wide">
          © {year} Damian Trajkovski
        </p>

        <p className="font-cormorant text-sm text-[var(--warm-gray)] italic">
          Designed &amp; built from scratch · Next.js + GSAP
        </p>

        <a
          href={`mailto:${personal.email}`}
          className="font-syne text-[11px] tracking-[0.15em] uppercase text-[var(--warm-gray)] hover:text-[var(--ink)] transition-colors"
        >
          {personal.email}
        </a>
      </div>
    </footer>
  )
}
