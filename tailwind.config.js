/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translatex(-2px)' },
          '75%': { transform: 'translatey(2px)' },
        },
      },
      animation: {
        'slow-shake': 'shake 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
