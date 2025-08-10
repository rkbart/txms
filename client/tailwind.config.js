/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fefdfc",
          100: "#fdfcf9",
          200: "#faf7f1",
          300: "#f5f2eb",
          400: "#f0ede4",
          500: "#f8f6f3", // base
          600: "#e1ded4",
          700: "#cac7bd",
          800: "#b3b0a7",
          900: "#9c9990",
        },
        darkgreen: {
          50: "#e2f2f2",
          100: "#c6e6e6",
          200: "#8dcfcc",
          300: "#4fb2b2",
          400: "#1b8c8c",
          500: "#083645", // base
          600: "#062c38",
          700: "#05222b",
          800: "#03191f",
          900: "#021013",
        },
        vividorange: {
          50: "#fff2eb",
          100: "#ffe5d7",
          200: "#ffcdb0",
          300: "#ffb288",
          400: "#ff9964",
          500: "#ff8a5b", // base
          600: "#e5774f",
          700: "#cc6645",
          800: "#b3543a",
          900: "#994331",
        },
        vividcyan: {
          50: "#e1fafa",
          100: "#b4f2f2",
          200: "#85ebeb",
          300: "#55e4e4",
          400: "#2cdcdc",
          500: "#01bdbe", // base
          600: "#019ea0",
          700: "#017e81",
          800: "#015f62",
          900: "#003f43",
        },
        crimson: {
          50: "#ffe9ec",
          100: "#ffd3d8",
          200: "#ffa6b0",
          300: "#ff7988",
          400: "#ff4c60",
          500: "#e9526f", // base
          600: "#cc475f",
          700: "#b03c51",
          800: "#943142",
          900: "#782635",
        },
      },
    },
  },
  plugins: [], 
};
