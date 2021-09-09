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
      purple: colors.purple,
      pink: colors.pink,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
      yellow: colors.yellow,
      teal: colors.teal
    }
  },
  variants: {
    extend: {
      bgOpacity: ['group-hover'],
      padding: ['group-hover']
    },
  },
  plugins: [
    function({addComponents}){
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen md': {maxWidth: '640px'},
          '@screen lg': {maxWidth: '768px'},
        }
      })
    }
  ],
}