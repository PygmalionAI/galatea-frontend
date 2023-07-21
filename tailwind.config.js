/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "ga-black": {
          darker: "#030b1c",
          default: "#050816",
          lighter: "#090b10",
          lightest: "#0d1017",
        },
        "ga-white": {
          lighter: "#fff",
          default: "#f3f3f3",
          darker: "#cfd3d6",
        },

        // accent color
        "ga-purple": {
          lightest: "#c090cb",
          lighter: "#b556b4",
          default: "#aa4bae",
          darker: "#9840a0",
          darkest: "#401c4c",
        },

        // used for gradients
        "ga-pink": "#ec008c",
        "ga-orange": "#fc6767",
        "ga-violet": "#d021a1",
        "ga-blue": "#40a8df",
      },
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
  plugins: [],
};
