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
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      variants: {
        animation: ["motion-safe"]
      }
    },
    colors: {
      'sec': '#022B3A',
      'main': '#EFECCA',
      'orangetheme': '#D36135',
      'darkMain': '#679289'
    },

    fontFamily: {
      'merri': ['Roboto', 'sans-bold'],
      'jost': ['jost'],
    },
  },
  plugins: [],
}