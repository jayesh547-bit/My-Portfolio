/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10100f',
        charcoal: '#181816',
        panel: '#20201d',
        cream: '#f3efe4',
        paper: '#e9e3d5',
        acid: '#d7ff43',
        coral: '#ff6b4a',
        electric: '#7898ff',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'sans-serif'],
        mono: ['DM Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(215,255,67,.14)',
        hard: '8px 8px 0 #10100f',
      },
    },
  },
  plugins: [],
};
