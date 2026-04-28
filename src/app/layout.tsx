import type { Metadata } from 'next'
import { Cormorant_Garamond, Syne } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/providers/SmoothScroll'
import Cursor from '@/components/ui/Cursor'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Nav from '@/components/navigation/Nav'

// ─── Fonts ────────────────────────────────────────────────────────────────────
// Cormorant Garamond: elegant editorial display serif
// Syne: geometric sans for UI labels, body, and navigation

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Damian Trajkovski — Software Engineer',
  description:
    'Graduate software engineer specialising in mobile development, cloud systems, and real-time data workflows. Based in Melbourne, VIC.',
  keywords: [
    'Damian Trajkovski',
    'Software Engineer',
    'Melbourne',
    'React Native',
    'Flutter',
    'Next.js',
    'University of Melbourne',
  ],
  authors: [{ name: 'Damian Trajkovski' }],
  openGraph: {
    title: 'Damian Trajkovski — Software Engineer',
    description:
      'Graduate software engineer specialising in mobile development, cloud systems, and real-time data workflows.',
    type: 'website',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Damian Trajkovski — Software Engineer',
    description:
      'Graduate software engineer specialising in mobile development, cloud systems, and real-time data workflows.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${syne.variable}`}
    >
      <body className="grain">
        <SmoothScroll>
          {/* UI chrome — always on top */}
          <Cursor />
          <ScrollProgress />
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
