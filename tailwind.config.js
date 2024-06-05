const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors:{
        'cyan':colors.cyan,
        'emerald':colors.emerald,
      },
    },
  },
  plugins: [],
}
