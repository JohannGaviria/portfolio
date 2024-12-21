/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#2d2d2d",
        backgroundCard: "#3b3b3b",
        title: {
          max: "#77c0d7",
          min: "#66a8c3"
        },
        subtitle: {
          max: "#a3d9e1",
          min: "#8ec7d2"
        },
        text: "#f0f0f0",
        button: "#6a7f7f",
        buttonHover: "#5c7070",
        iconsSocial: "#b8b8b8",
        iconsSocialHover: "#d1d1d1",
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
          javascript: '#f0db4f',
          react: '#61dafb',
          nodejs: '#68a063',
        }
      },
    },
  },
  plugins: [],
}