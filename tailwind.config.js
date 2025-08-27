/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            halvicta: ['Halvetica', 'sans-serif'],
            inter: ['Inter', 'sans-serif'],
            LexendDeca: ['Lexend+Deca', 'sans-serif'],
            Poppins: ['"Poppins"', 'serif'],
          },
    },
  },
  plugins: [],
}
