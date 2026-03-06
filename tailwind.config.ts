import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // "navy" token → deep forest greens
        navy: {
          50:  '#edf5f0',
          100: '#d0e8da',
          500: '#3A7058',
          600: '#2E5A46',
          700: '#234636',
          800: '#1A3428',
          900: '#12231A',
        },
        // "gold" token → dusty sage greens
        gold: {
          300: '#A8C9BC',
          400: '#8DBDAD',
          500: '#6B9E8A',
          600: '#4A7A68',
          700: '#2E5A48',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        serif:   ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
