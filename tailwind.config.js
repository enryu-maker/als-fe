/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:'Poppins'
      },
      colors:{
        primary : '#9C492A',
        primary1 : '#125629',
      }
    },
  },
  plugins: [],
}

