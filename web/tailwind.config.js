/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",

      "ga-white": {
        lightest: "#fff",
        default: "#f3f3f3",
        darker: "#cfd3d6",
      },

      // could be improved
      "ga-gray": {
        lightest: "#91919a",
        lighter: "#78787b",
        default: "#52525b",
        darker: "#3f3f46",
      },

      "ga-black": {
        lightest: "#222828",
        lighter: "#0d1017",
        default: "#050816",
        darker: "#030b1c",
      },

      // accent color
      "ga-purple": {
        lightest: "#c090cb",
        lighter: "#b556b4",
        default: "#aa4bae",
        darker: "#9840a0",
        darkest: "#401c4c",
      },

      // for toasts
      "ga-green": "#4aee70",
      "ga-red": "#ff5d4e",

      // used for gradients
      "ga-pink": "#ec008c",
      "ga-orange": "#fc6767",
      "ga-violet": "#d021a1",
      "ga-blue": "#2088df",
    },

    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

