import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:         '#374EB5',
          'blue-dark':  '#2A3D8F',
          'blue-light': '#EEF1FA',
          amber:        '#C87A3A',
          'amber-light':'#D9934F',
        },
        base: {
          white:    '#FFFFFF',
          offwhite: '#F7F5F1',
          warm:     '#EDE9E2',
          border:   '#E2DED8',
        },
        text: {
          primary:   '#2D2D2D',
          secondary: '#555555',
          muted:     '#888888',
          white:     '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
