const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
      yellow: colors.yellow,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}