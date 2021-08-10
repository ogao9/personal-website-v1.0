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
        'md' : ['1.03rem', {
          lineHeight: '1.5rem'
        }],
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: '#DEDEDE',
            h1: {color: '#DEDEDE'},
            h2: {color: '#DEDEDE'},
            h3: {color: '#DEDEDE'},
            h4: {color: '#DEDEDE'},
            strong: {color: '#DEDEDE'},
          },
        },
      }),
  },
},
  variants: {
    extend: {
      fontWeight: ["focus", "hover"]
    },
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
