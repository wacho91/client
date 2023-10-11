/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "Poppins",
        titleFont: "Nunito Sans",
      }
    },
  },
  plugins: [],
}

