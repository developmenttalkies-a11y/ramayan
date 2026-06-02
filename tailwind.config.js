/** @type {import('tailwindcss').Config} */
export default {
 content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        
    primary: "#FF9933", // add this
    saffron: "#FF9933",
    temple: "#A0522D",
    scripture: "#FFF8E7",
    light: "#f5f5f5",
      },
      fontFamily: {
  hindi: ["Noto Sans Devanagari", "sans-serif"],
},
    },
  },
  plugins: [],
}

