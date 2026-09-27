/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#11110f',
        sand: '#d8d2c1',
        paper: '#e7e2d4',
        acid: '#f4ff18',
        fog: '#c8c2b1',
        ember: '#ff6847',
      },
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Outfit', 'ui-sans-serif', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        float: '0 28px 70px rgba(17,17,15,.16)',
        insetsoft: 'inset 0 1px 0 rgba(255,255,255,.45)',
      },
    },
  },
  plugins: [],
};
