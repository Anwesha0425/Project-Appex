/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': { 'min': '1px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '991px' },
      'lg': { 'min': '992px', 'max': '1239px' },
      'xl': { 'min': '1240px' },
    },
    colors: {
      'main': '#dbad69',
      'dark__blue': '#060031'
    },
  },
  plugins: [],
}