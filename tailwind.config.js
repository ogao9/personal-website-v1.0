module.exports = {
  purge: [ './pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', 
  theme: {
    extend:{
      colors: {
        primary: "#fbbf24",
        secondary: "#2461fb",
        extra1: "#fb5324",
        extra2: "#ccfb24",
        black:{
          DEFAULT: "#121212",
          surface: "#242424",
          text: '#212121'
        },
        white:{
          DEFAULT: "#F7F7F7",
          text: "#DEDEDE"
        }
      },
      animation: {
        'toast': 'fadeIn 0.5s, fadeOut 0.5s 5s',
      },
      keyframes: {
        'fadeIn': {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
        'fadeOut': {
          '0%': {opacity: '1'},
          '100%': {opacity: '0'}
        }
      }
  },
},
  variants: {
    extend: {
      fontWeight: ["focus", "hover"]
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
