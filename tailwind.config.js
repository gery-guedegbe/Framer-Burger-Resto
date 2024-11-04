/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#000000",
        customYellow: "#F3FFCF",
        customWhite: "#FFFFFC",
      },
      screens: {
        larg: "1940px",
      },
    },
  },
  plugins: [],
};