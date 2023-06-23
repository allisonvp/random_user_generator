/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // colors: {
      //   "light-brown": "#FAF0E4",
      // },
      gridTemplateColumns: {
        cards: "repeat(auto-fit, minmax(240px, 1fr))",
      },
      screens: {
        mobile: { max: "630px" },
      },
    },
  },
  plugins: [],
};
