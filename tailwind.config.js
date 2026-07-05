/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        midnight: '#0b1728',
        ocean: '#2563eb',
        aqua: '#2dd4bf',
        pearl: '#f8fafc',
        champagne: '#d9b76e',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(37, 99, 235, 0.22)',
        panel: '0 18px 60px rgba(2, 6, 23, 0.28)',
      },
    },
  },
  plugins: [],
};
