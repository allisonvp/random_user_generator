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
        blue: "#6ab5ed",
        cards: "#FBFBFF",
      },
      gridTemplateRows: {
        layout: "auto auto auto 1fr ",
      },
      gridTemplateColumns: {
        cards: "repeat(auto-fit, minmax(282px, 310px))",
        "list-mobile": "auto 1fr auto",
      },
      screens: {
        mobile: { max: "629px" },
        tablet: "629px",
        desktop: "1147px",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
