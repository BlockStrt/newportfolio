/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth:{
      container: '1440px',
      contentContainer: '1140px',
      containerSmall: '1024px',
      containerxs: '768px',
    },
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      fontFamily: {
      bodyFont: ['Monteserrat' , 'sans-serif'],
      titleFont: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        navbarShadow: ' 0 10px 30px -10px rgba(2,12,27,0.7)',
      },
      colors: {
        bodyColor: '#271c19',
        textGreen: '#fffffe',
        textLight: '#e78fb3',
        textDark: '#a7a9be',
        hoverColor: 'rgba(100,255,218,0.1)',
      }
    },
  },
  plugins: [],
}
