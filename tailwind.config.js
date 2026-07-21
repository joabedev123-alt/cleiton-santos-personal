/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#050505',
          darker: '#101010',
          grayDark: '#181818',
          gray: '#292929',
          white: '#FFFFFF',
          light: '#F4F4F4',
          yellow: '#F5B400',
          yellowLight: '#FFC400',
          gold: '#B98500',
        }
      },
      fontFamily: {
        heading: ['Bebas Neue', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
