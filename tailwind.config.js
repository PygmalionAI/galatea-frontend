/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "ga-background-lighter": "#0d1017",
        "ga-primary": "#050816",
        "ga-secondary": "#030b1c",
        "ga-default": "#090b10",
        "ga-lighter": "#0d1017",
        "ga-white-darker": "#cfd3d6",
        "ga-white": "#f3f3f3",
        "ga-text": "#fff",
        "ga-black": "#090b10",

		// used for gradients
        "ga-pink": "#ec008c",
      	"ga-orange": "#fc6767",
		"ga-violet": "#d021a1",

        "ga-purple": {
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
