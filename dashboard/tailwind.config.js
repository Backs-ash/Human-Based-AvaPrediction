/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '11': 'repeat(11, minmax(1, 1fr)) auto',
      }, 
      gridTemplateColumns: {
        '8': 'repeat(8, minmax(1, 1fr)) auto',
        '11': 'repeat(11, minmax(1, 1fr)) auto',
      }
    },
  },
  plugins: [],
}

