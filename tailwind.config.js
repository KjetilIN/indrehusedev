/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/img/wave.svg')",
        'profile': "url('../public/img/me.PNG')",
      },
      boxShadow:{
        'card1': "20px 20px rgba(0,0,0,.25)",
        'card2': "10px 10px rgba(0,0,0,.55)",
      }
    },
    colors: {
      'sec': '#fbf5ec',
      'main': '#e77249',
      'mainSH': '#b4806c',
      'secSh': '#818f8f',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },

    fontFamily: {
      'merri': ['Roboto', 'sans-bold'],
    },
  },
  plugins: [],
}