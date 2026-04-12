/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <--- THIS ENABLES THE TOGGLE
  theme: {
    extend: {
      fontFamily: {
        display:['Oswald', 'sans-serif'], 
        sans:['Inter', 'sans-serif'],
      },
      colors: {
        emeraldGreen: '#008000',
        emeraldYellow: '#FFD700',
        darkBase: '#0a0a0a', 
        darkSurface: '#141414', 
        darkBorder: '#2a2a2a', 
      }
    },
  },
  plugins:[],
}
