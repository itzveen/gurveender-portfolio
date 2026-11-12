/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        beige: '#F5EFE6',
        sand: '#E6DACB',
        rule: '#D3C4B4',
        taupe: '#A58D7F',
        choc: '#654635',
        mahog: '#4A2525',
        char: '#292321',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      screens: {
        'figma': '1920px',
      }
    },
  },
  plugins: [],
}
