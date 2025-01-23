/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#1a1c29", // Azul profundo con un toque de negro
        backgroundCard: "#333547", // Gris oscuro con matices morados
        title: {
          max: "#c9a4ff", // Morado pastel suave pero brillante
          min: "#9b77ff"  // Morado más oscuro pastel
        },
        subtitle: {
          max: "#b8d8d6", // Verde agua pastel suave
          min: "#93b8b3"  // Verde azulado más oscuro
        },
        text: "#d8d8d8", // Gris claro para texto
        button: "#7f56c0", // Morado más oscuro para el botón
        buttonHover: "#6a47a2",
        iconsSocial: "#c6d2e6", // Azul pastel claro
        iconsSocialHover: "#b0c1da", // Azul pastel más suave
        
        tech: {
          python: '#306998',
          django: '#092e20',
          flask: '#000000',
          postgresql: '#336791',
          mysql: '#4479a1',
          mongodb: '#4db33d',
          sqlite: '#003b57',
          docker: '#2496ed',
          git: '#f34f29',
          github: '#181717',
          postman: '#ff6c37',
          testing: '#49be49',
          jwt: '#000000',
          restapi: '#ff4949',
          javascript: '#f0db4f',
          react: '#61dafb',
          nodejs: '#68a063',
        }
      },
    },
  },
  plugins: [],
}