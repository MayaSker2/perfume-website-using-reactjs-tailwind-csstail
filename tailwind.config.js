/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:["Poppins", "sana-serif"],
        cursive:["Pacifico"," serif"],
      },
      colors:{
        primary:"#831843",
        secondary:"#be123c",
        brandDark:"#270C03",
      },
      container:{
        center: true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          // lg:"4rem",
          // xl:"5rem",
          // sm:"2rem",
        },
      },
    },
  },
  plugins: [],
}

