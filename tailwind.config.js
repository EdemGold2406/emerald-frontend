/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emeraldGreen: '#008000',
        emeraldYellow: '#FFD700',
      }
    },
  },
  plugins:[],
}
