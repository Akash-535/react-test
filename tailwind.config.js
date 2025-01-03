/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "oil":"#222222",
        "light-grey":"#D1E0E9",
        "blue-eyes":"#0071BB",
        "ball-blue":"#39A3E7"
      }
    },
  },
  plugins: [],
}