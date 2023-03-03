/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'th-primary': '#3A70A6',
        'th-secondary': '#87B7E7',
        'th-light': '#edf3f8',
        'th-gray': '#989898',
      },
      fontFamily: {
        'heading': 'Alumni Sans, sans-serif',
        'heading-sm': 'Montserrat, sans-serif',
        'body': 'Poppins, sans-serif',
      },
      backgroundImage: {
        'header': "url('/src/assets/header-bg.png')",
        'header-md': "url('/src/assets/header-md.jpg')",
        'vector': "url('/src/assets/vector-about.png')",
        'line': "url('/src/assets/dot-line-bg.svg')"
      }
    },
  },
  plugins: [],
}
