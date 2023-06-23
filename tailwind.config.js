/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "brown-100": "#f8f1e8",
        "brown-200": "#d4c6b5",
        "brown-300": "#bcb2a6",
        "brown-400": "#aaa094",
        "brown-500": "#7e776e",
        "light-blue": "#DBECFC",
        "light-green": "#D7F3E8",
        "light-purple": "#FBFBFF",
        "light-violet": "#EADBFD",
        "light-gray": "#B7B7B9",
        violet: "#9448E1",
        green: "#51D294",
        blue: "#6ab5ed",
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
        tablet: { max: "1147px" },
        desktop: "1147px",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        landing: "url('/Images/circle-scatter-haikei-2.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
