/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#D99904',
        black:'#151515',
        
      },
      backgroundImage:{

      },
      fontFamily: {
        'cinzel': 'Cinzel' ,
        'inter':'Inter'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}