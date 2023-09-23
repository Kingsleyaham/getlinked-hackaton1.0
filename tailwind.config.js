/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#D434FE",
        purple: "#903AFF",
        "dark-purple": "#150E28",
        "light-pink": "#FF26B9"
      },
      fontFamily: {
        primary: ["Montserrat"],
        secondary: ["Clash Display", "sans-serif"],
        tertiary: ["Unica One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
