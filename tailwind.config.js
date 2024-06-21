
/** @type {import('tailwindcss').Config} */
export default {
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
    extend: {
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187'
        }
      }
    }
  },
  plugins: [],
}