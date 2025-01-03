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

        dark6:'#E8E8E8',
        dark7:'#F3F3F3'
        
      },
      backgroundImage: {
        'intro': "url('/src/assets/home/chef-service.jpg')",
        'featured': "url('/src/assets/home/featured.jpg')",
        'ourMenuBanner': "url('/src/assets/menu/banner3.jpg')",
        'ourShopBanner': "url('/src/assets/shop/banner2.jpg')",
        
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