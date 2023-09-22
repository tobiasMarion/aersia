/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./renderer/*.html'],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui']
    },
    extend: {
      borderRadius: {
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}

