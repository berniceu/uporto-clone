/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#333',
        'dark-blue': '#0B132A',
        'grey': '#4F5665'
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

