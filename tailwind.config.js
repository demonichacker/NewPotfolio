/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      black: "#1e1917",
      white: "#f1e1d9",
      red: {
        100: "#f1c7c7",  // Light red
        200: "#f08080",  // Light-medium red
        300: "#e04e4e",  // Medium red
        400: "#d62828",  // Darker red
        500: "#ff0000",   // Bright red
        600: "#e50000",   // Darker red
        700: "#8b0000",   // Even darker red
      },
      darkRed: "#8B0000", // Darker red
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
    },
    extend: {
      boxShadow: {
        redShadow: "0px 0px 20px 0px rgba(255, 0, 0, 0.5)", // Red glow
        redBigShadow: "10px 10px 1000px 500px rgba(255, 0, 0, 0.3)",
        redMediumShadow: "10px 10px 200px 150px rgba(255, 0, 0, 0.5)",
        blackBigShadow: "10px 10px 10000px 500px rgba(0, 0, 0, 0.3)",
        blackMediumShadow: "10px 10px 2000px 150px rgba(0, 0, 0, 0.5)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
