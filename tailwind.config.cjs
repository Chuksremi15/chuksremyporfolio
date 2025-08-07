/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#191a1d",
        secondary: "#4b6cc1",
        "light-gray": "#ababab",
        "custom-gray": "#5e5e5e",
        "background-gray": "#f6f6f6",
        "custom-dark": "#121316",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
