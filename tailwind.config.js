/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,json}",
    
  ],
  theme: {
    screens: {
      'xs':'250px',
      'sm': '380px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl' : '1500px',
      '3xl' : '2000px',
    },
    extend: {
      boxShadow: {
        '4xl': '0px 0px 39px -11px rgba(184,184,184,0.7)',
      },
      colors:{
        primary:'#0259b2',
        secondary:'#888888',
        hovclr:'#2563eb'

      },
      fontFamily: {
        light:['Poppins-light', 'sans-serif'],
        normal:['Poppins-Regular', 'sans-serif'],
        medium:['Poppins-Medium', 'sans-serif'],
        semibold:['Poppins-SemiBold', 'sans-serif'],
        bold:['Poppins-Bold', 'sans-serif'],
        extrabold:['Poppins-Extrabold', 'sans-serif'],
      },
      backgroundImage:{
        'oasisbg': "url('./assets/images/media/oasbg.webp')",
        'ctabg': "url('./assets/images/media/ctabg.webp')",
        'whychosbg': "url('./assets/images/media/whychbg.webp')",
        'carrerbg': "url('./assets/images/media/careers/carrerbg.webp')",
      }
    },
  },
    plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}