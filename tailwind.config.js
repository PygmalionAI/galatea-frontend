/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "#090b10",
        "background-lighter": "#0d1017",
        purple: {
          50: "#c8aad4",
          100: "#c49acf",
          200: "#bf80c8",
          300: "#bb69c0",
          400: "#b556b4",
          500: "#aa4bae",
          600: "#9840a0",
          700: "#7f348b",
          800: "#60286e",
          900: "#401c4c",
        },
        primary: "#050816",
        secondary: "#030b1c",
        tertiary: "#005282",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
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