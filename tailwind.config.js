module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#F8F8FB',
      secondary: '#EFF3FA',
      white: '#FFFFFF',
      main: '#4ABEC6',
      lightblue: '#8CD5FF',
      lightred: '#F69A9A',
      green: {
        100: '#42DD94',
        200: '#63C9A8',
      },
      fonts: {
        100: '#223141',
        200: '#DBDBDB',
        300: '#000000',
      },
      trans: '#22314180',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // import tailwind forms
  ],
};
