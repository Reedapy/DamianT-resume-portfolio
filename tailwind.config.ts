import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        syne: ['var(--font-syne)', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#F3EDE3',
        ink: '#141410',
        sienna: '#C84B2A',
        'warm-gray': '#8A847A',
        'light-gray': '#E6E0D6',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}

export default config
