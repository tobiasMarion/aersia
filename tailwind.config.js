/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
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

