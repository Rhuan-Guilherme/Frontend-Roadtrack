/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        cinza: {
          100: "#F5F5F5",
          200: "#E6E6E6",
          300: "#D1D1D1",
          400: "#BDBDBD",
          500: "#ADADAD",
          600: "#9E9E9E",
          700: "#8A8A8A",
          800: "#757575",
          900: "#616161"
        },
        cinzaEscuro: {
          500: "#4D4D4D",
          600: "#3D3D3D",
          700: "#2E2E2E",
          800: "#1F1F1F",
          900: "#101010"
        },

        roxo:{
          100: "#876BFC",
          200: "#6C4CF0",
          300: "#5939E0",
          400: "#4727CD",
          500: "#3817C2",
          600: "#26099F",
          700: "#1A0183",
          800: "#110057",
          900: "#090031",
        }
      },
    },
  },
  plugins: [],
}