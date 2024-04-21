/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'black': '#111111',
      },
      fontFamily: {
        'poppins': 'var(--font-poppins)',
        'raleway': 'var(--font-raleway)',
      },
    }
  },
  plugins: [],
}

