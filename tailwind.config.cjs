/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "#01030C", // Fondo principal (negro azulado)
        backgroundSecondary: "#070918", // Fondos secundarios / degradados (azul noche)
        backgroundCard: "#151325", // Superficies y sombras de tarjetas (azul púrpura oscuro)
        borderSoft: "#2A2232", // Elementos ambientales / bordes sutiles (púrpura oscuro)
        accent: "#8F8AF6", // Color de acento / primario (lavanda)
        accentHover: "#A67FF0", // Énfasis, hovers y detalles (violeta)
        title: "#FAFAFA", // Títulos principales (blanco)
        text: "#B7AFAF", // Texto secundario y descripciones (gris claro)

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
          fastapi: '#05998b',
          drf: '#a30000',
          pydantic: '#e92063',
          sqlalchemy: '#d71f00',
          alembic: '#0f5997',
          redis: '#dc382d',
          pytest: '#0a9edc',
          ruff: '#d7ff64',
          mypy: '#2a6db2',
          githubactions: '#2088ff',
          hexagonal: '#7a5ec7',
          ddd: '#e67e22',
          swagger: '#6db33f',
          structlog: '#64748b',
        }
      },
      boxShadow: {
        card: '0 16px 40px -16px rgba(143, 138, 246, 0.16), 0 8px 24px -14px rgba(0, 0, 0, 0.65)',
        'card-hover': '0 32px 64px -24px rgba(167, 127, 240, 0.30), 0 12px 32px -16px rgba(0, 0, 0, 0.70)',
        glow: '0 0 0 1px rgba(143, 138, 246, 0.35), 0 16px 40px -18px rgba(143, 138, 246, 0.30)',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}