/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      xxs:'275px',
      xs: '320px',
      vs: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('Images/header-background.jpg')"
      }
    },
    listStyleType: {
      square: 'square',
    },
  },
  plugins: [],
}
