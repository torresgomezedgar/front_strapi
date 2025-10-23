/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"), 
  ],
  daisyui: {
     themes: ["light", "dark"], // ajusta o agrega temas
   },
}


// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx,vue}",
//     // agrega otras carpetas donde tengas componentes/plantillas
//     "./public/**/*.html"
//   ],
//   darkMode: "class", // o "media" según prefieras
  
//   plugins: [require("@tailwindcss/typography"), require("daisyui")],
//   daisyui: {
//     themes: ["light", "dark"], // ajusta o agrega temas
//   },
// };


