# Damian Trajkovski - Portfolio

An editorial-style personal portfolio website built with **Next.js 14**, **GSAP** and **Tailwind CSS**.  
Inspired by award-winning design studios - rich typography, scroll-driven animations and a magazine-cover aesthetic.

---

## ✨ Features

- **Editorial design** - Cormorant Garamond display type + Syne UI font, warm cream / sienna palette
- **GSAP ScrollTrigger** - cinematic section reveals driven by scroll position
- **Lenis smooth scroll** - buttery smooth scrolling, synced with GSAP's RAF ticker
- **Custom cursor** - dot + ring follower with hover expansion (desktop only)
- **Scroll progress bar** - thin sienna line that fills as you scroll
- **Marquee ticker** - looping skill carousel
- **Responsive** - fully mobile-first, hamburger nav on small screens
- **Grain overlay** - subtle SVG noise texture for paper-like depth
- **Zero-config Vercel deployment**

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
git clone https://github.com/Reedapy/DamianT-resume-portfolio.git
cd DamianT-resume-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## ✏️ Customisation

**All personal content lives in one file: `src/lib/data.ts`**

Edit that file to update:

| Field | Description |
|-------|-------------|
| `personal` | Name, title, email, phone, location, LinkedIn, GitHub, bio |
| `projects` | Each project: title, client, period, role, stack, description, highlights, link |
| `skills` | Categorised skill lists (Frontend, Backend, Mobile, Cloud, Tools) |
| `allSkills` | Flat list for the marquee ticker |
| `education` | Degrees, institutions and periods |

---

## 📧 Contact Form Setup (Formspree)

The form uses a simulated send by default. To enable real submissions:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and copy your form ID
3. Open `src/components/sections/Contact.tsx`
4. Replace the `handleSubmit` function body with:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setStatus('sending')
  try {
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
    setStatus(res.ok ? 'sent' : 'error')
  } catch {
    setStatus('error')
  }
}
```

---

## 🚢 Deployment

### Vercel (Recommended - zero config)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo → Deploy

Vercel auto-detects Next.js and deploys on every push to `main`.

### Manual (Node.js server)

```bash
npm run build
npm start
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

Enable standalone output in `next.config.mjs`:
```js
const nextConfig = { output: 'standalone' }
```

---

## 🗂️ Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml              # Lint + type-check + build on every push
├── src/
│   ├── app/
│   │   ├── globals.css         # Design tokens, base styles, marquee, cursor
│   │   ├── layout.tsx          # Fonts, metadata, providers, chrome
│   │   └── page.tsx            # Assembles all sections
│   ├── components/
│   │   ├── navigation/
│   │   │   └── Nav.tsx         # Fixed nav, hamburger, mobile fullscreen menu
│   │   ├── providers/
│   │   │   └── SmoothScroll.tsx# Lenis + GSAP ticker integration
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Magazine-cover hero with slide-up headline
│   │   │   ├── About.tsx       # Pull quote + two-column bio
│   │   │   ├── Work.tsx        # Numbered project list with stack tags
│   │   │   ├── Skills.tsx      # Marquee ticker + categorised grid
│   │   │   ├── Contact.tsx     # Typographic headline + form + socials
│   │   │   └── Footer.tsx      # Minimal footer bar
│   │   └── ui/
│   │       ├── Cursor.tsx      # Custom dot + ring cursor
│   │       └── ScrollProgress.tsx # Top-of-page progress bar
│   ├── lib/
│   │   └── data.ts             # ← ALL PERSONAL CONTENT LIVES HERE
│   └── types/
│       └── index.ts            # Shared TypeScript interfaces
├── public/                     # Static assets (add your OG image here)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── README.md
```

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS custom properties |
| Animations | GSAP 3 + ScrollTrigger |
| Smooth scroll | Lenis |
| Fonts | Cormorant Garamond, Syne (via next/font/google) |
| CI/CD | GitHub Actions |
| Deployment | Vercel |

---

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server at localhost:3000 |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler (no emit) |

---

## 🎨 Design Tokens

Defined as CSS custom properties in `globals.css` and Tailwind theme:

| Token | Value | Use |
|-------|-------|-----|
| `--cream` | `#F3EDE3` | Page background |
| `--ink` | `#141410` | Primary text + borders |
| `--sienna` | `#C84B2A` | Accent, highlights |
| `--warm-gray` | `#8A847A` | Secondary text, labels |
| `--light-gray` | `#E6E0D6` | Dividers, tag borders |

---

## 📄 License

MIT - feel free to use as a base for your own portfolio.
