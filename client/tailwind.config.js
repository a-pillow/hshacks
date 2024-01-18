/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        openmenu:  'openmenu 0.7s ease-in',
        closemenu:  'closemenu 0.7s ease-in',
    },
    keyframes: {
        openmenu: {
        // initial position
            '0%': {left:  '-350px'},
        // final position
            '100%': {left:  '0px'}
        },
        closemenu: {
        // initial position
            '0%': {left:  '0px'},
        // final position
            '100%': {left:  '-350px'}
        },
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          background: "#d8e2dc",
          primary: "#6b705c",
          secondary: "#bdc7c1",
          tertiary: "#134074",
        },
      },
      margin: {
        '5px': '5px',
      }
    },
    fontFamily: {
      lexend: "Lexend Deca, sans-serif",
    },
  },
  plugins: [],
};
