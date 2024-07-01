/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors : {
        primary : '#FECB21',
        secondary : '#1D1D1D'
      },
      fontFamily : {
        poppins : ['Poppins,san-serif']
      },
      backgroundImage : {
        hero : "url('../public/assets/images/bg.png')"
      }
    },
  },
  plugins: [],
}