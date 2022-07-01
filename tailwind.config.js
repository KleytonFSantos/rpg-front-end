/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tower-bg':"url('/src/assets/103.jpeg')",
        'tower-login':"url('/src/assets/101.jpg')",
        'tower-signup':"url('/src/assets/102.jpg')",
        'tower-forgot-pass':"url('/src/assets/105.jpg')",
      },
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
