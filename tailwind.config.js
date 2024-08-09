/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fondoHome: "#040711",
        wh: "#FFFFFF",
        fondoBtnSele : "#4D5562",
        borderTextArea: "rgba(255, 255, 255, 0.3)", // Blanco con 20% de opacidad
        fondoPrimerText: "#000000", // #4D5562 con 20% de opacidad
        fondoSegundoText: "#000000", // #394150 con 50% de opacidad
      },
    },
  },
  plugins: [],
};
