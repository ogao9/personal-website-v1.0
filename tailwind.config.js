module.exports = {
  purge: [ './pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', 
  theme: {
    extend:{
      colors: {
        'cream' : 'rgb(254,250,246)',
      }
    }
  },
  variants: {
    extend: {
      textDecoration: ["active"]
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
