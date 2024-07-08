/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*","./index.html"],
  theme: {
    extend: {colors:
      {
        bg:"#008080",
        yw:"#ffd700",
        white:"#ffffff"

    },
    fontFamily:{
      poppin:['"Poppins"',...defaultTheme.fontFamily.sans],
    },
    screens:{
      'xs':"300px",
      'sm': '640px',
      'md':"768px",
      'lg':"1024px",
      'xl':"1280px",
    }
  },
  },
  plugins: [],
}

