/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      fontFamily: {
        sanss: ['"DM Sans"', "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#005911",
          DEFAULT: "#005911",
          dark: "#002D0A",
        },
        secondary: {
          light: "#F7F7F7",
          DEFAULT: "#F2F2F2",
          dark: "#E5E5E5",
        },
      },
    },
  },
  plugins: [],
};
