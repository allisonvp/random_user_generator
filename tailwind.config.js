/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "light-brown": "#FAF0E4",
        "light-blue": "#DBECFC",
        "light-green": "#D7F3E8",
        "light-violet": "#EADBFD",
        "light-gray": "#B7B7B9",
        violet: "#9448E1",
        green: "#51D294",
        cards: "#FBFBFF",
      },
      gridTemplateColumns: {
        cards: "repeat(auto-fit, minmax(240px, 300px))",
      },
      screens: {
        mobile: { max: "629px" },
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
