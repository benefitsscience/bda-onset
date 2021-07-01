module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
theme: {
    extend: {
      screens: {
        '3xl': '3072px',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
      display: ['hover', 'focus'],
      overflow: ['hover', 'focus'],
      borderColor: ['hover', 'focus', 'active']
    },
  },
  plugins: [require('tailwindcss-font-inter')],
}
