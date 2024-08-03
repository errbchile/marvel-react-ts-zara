/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'marvel-red': "#EC1D24", // Reemplaza con tu color personalizado
      },
    },
  },
  plugins: [],
};
