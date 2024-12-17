/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        saveya: ['saveya', 'sans-serif'],
        editorial: ['editorial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

