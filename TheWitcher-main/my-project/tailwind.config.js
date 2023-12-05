/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'FondPart1': "url('fond-part-1.png')",
        'FondPart1-light': "url('fond-part-1-light.png')",

        'FondPart2': "url('fond-part-2.png')",
        'FondPart2-light': "url('fond-part-2-light.png')",

        'FondPart3': "url('fond-part-3.png')",
        'FondPart3-light': "url('fond-part-3-light.png')",


      },

      colors:{
        "Dark" : "var(--bg-Dark)",

        "Dark-30" : "var(--bg-Dark-30)",
        "Dark-50" : "var(--bg-Dark-50)",
        "Dark-70" : "var(--bg-Dark-70)",

        "Dark-gray-bleu" : "var(--bg-Dark-gray-bleu)",
        "Gray" : "var(--bg-Gray)",
        "Gray-bleu" : "var(--bg-Gray-bleu)",
        "Brown" : "var(--bg-Brown)",
        "Gold" : "var(--bg-Gold)",
        "White" : "var(--bg-White)",
        "Dark-red" : "var(--bg-Dark-red)",
    },
    fontFamily: {
      fontcinzel: '"Cinzel", "serif"',
    },
    
    },
    
  },
  
  plugins: [],
}

