/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs':'250px',
      'sm': '380px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl' : '1500px'},
    extend: {
      boxShadow: {
        '4xl': '0px 0px 39px -11px rgba(184,184,184,0.7)',
      },
      backgroundColor:{
        primary:'rgb(67, 130, 45)',
        secondary:'rgb(4, 48, 93)',
        third:'rgb(78, 147, 0)',
      },
      colors:{
        primary:'rgb(67, 130, 45)',
        secondary:'rgb(4, 48, 93)',
        third:'rgb(78, 147, 0)',
      },
      fontFamily: {
        light:['Poppins-light', 'sans-serif'],
        normal:['Poppins-Regular', 'sans-serif'],
        medium:['Poppins-Medium', 'sans-serif'],
        semibold:['Poppins-SemiBold', 'sans-serif'],
        bold:['Poppins-Bold', 'sans-serif'],
        extrabold:['Poppins-Extrabold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}