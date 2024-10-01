
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'data-[state=active]:bg-accent',
    'data-[state=active]:text-primary',
    'data-[state=active]:font-bold',
    'data-[state=active]:shadow-sm',
    // Add any other classes you need
  ],
  theme: {
    container: {
      center: true,
      padding: '15px'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    backgroundImage: {
      main: `linear-gradient(to bottom, #2E125D, #1A1337)`,
      grid: `url('./assets/gridHero.png')`
    },
    extend: {
      colors: {
        lightblue: '#5684AE',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187'
        },
        darkblue: '#0F4C81',
        lightorange: '#FFE4C8',
        darkOrange: '#F9BE81',
        calendercolor: '#E4F6ED'
      },
      fontFamily: {
        sans: ["Open Sans"]
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      }
    }
  },
  plugins: [],
}