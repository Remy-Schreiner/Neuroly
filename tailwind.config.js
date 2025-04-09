/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E07A5F',    // Terracotta
        background: '#F4F1DE', // Beige sable
        secondary: '#81B29A',  // Vert sauge
        text: '#3D405B',      // Gris ardoise
        accent: '#F2CC8F',    // Crème
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};