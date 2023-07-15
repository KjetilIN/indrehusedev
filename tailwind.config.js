/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gradient-dark': '#142139',
        'gradient-medium': '#035875',
        'gradient-light': '#009a93',
      },
      gradientColorStops: {
        'gradient-start': 'var(--gradient-start, #142139)',
        'gradient-mid': 'var(--gradient-mid, #035875)',
        'gradient-end': 'var(--gradient-end, #009a93)',
      },
    },
  },
  plugins: [],
}
