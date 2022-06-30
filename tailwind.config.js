/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'input-black':'#1f2223',
        'input-focus':'#414646',
        'my-black':'#282c2d',
        'light-blue': '#4dd0e1',
        'light-blue-hover':'#26c6da',
      },
      fontFamily: {
        nunito: [ 'Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
