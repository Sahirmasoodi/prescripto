/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#5f6FFF',
        'secondary': '#4a55d8',
        'background': '#f4f5ff',
        'text': '#2c3e50',
        'hover': '#3c48cc',
        'border': '#e0e5ff',
      }
    },
  },
  plugins: [],
}