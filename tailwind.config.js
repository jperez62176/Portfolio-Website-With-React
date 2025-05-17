/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3d9a5b',
        secondary: '#C3F0FE',
      },
      fontFamily: {
        sans: ['Trebuchet MS', 'sans-serif'],
      },
    },
  },
  plugins: [],
}