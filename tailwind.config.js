/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#333',
        'gold': '#a18a4d',
        'grey': '#4F5665'
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      gridTemplateColumns: {
        '2fr-1fr': '2fr 1fr',
      },
    },
  },
  plugins: [],
}

