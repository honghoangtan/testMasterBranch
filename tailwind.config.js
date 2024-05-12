
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': "Montserrat",
        'popin': 'Poppins'
      },
      animation: {
        loop: 'loop 50s linear infinite',
      },
      keyframes: {
        loop: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      colors: {
        bg: 'rgba(255 85 85 85/100)'
      }
    },
  },
  plugins: [],
}