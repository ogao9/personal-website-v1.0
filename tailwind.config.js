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
          text: "#DEDEDE",
          light: '#ffffff'
        }
      },
      animation: {
        toast: 'fadeIn 7s forwards',
      },
      keyframes: {
        'fadeIn': {
          '0%': {opacity: '0'},
          '25%': {opacity: '1'},
          '75%': {opacity: '1'},
          '100%': {opacity: '0'},
        },
      },
      fontSize:{
        'md' : ['1.02rem', {
          lineHeight: '1.5rem'
        }],
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
