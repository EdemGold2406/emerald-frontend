/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'display' for bold, impact headers, 'sans' for clean body text
        display: ['Oswald', 'sans-serif'], 
        sans:['Inter', 'sans-serif'],
      },
      colors: {
        emeraldGreen: '#008000',
        emeraldYellow: '#FFD700',
        // Adding premium dark theme colors
        darkBase: '#0a0a0a', // Almost black background
        darkSurface: '#141414', // Slightly lighter for cards
        darkBorder: '#2a2a2a', // Thin borders for cards
      }
    },
  },
  plugins:[],
}
