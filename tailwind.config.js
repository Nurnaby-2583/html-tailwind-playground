/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,php,js}",
    "./**/*.php",
    // "!./node_modules/**/*"
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1280px",
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        green: {
          dark: "var(--green-dark)",
          light: "var(--green-light)",
        },
        grey: {
          dark: "var(--grey-dark)",
          mid: "var(--grey-mid)",
          light: "var(--grey-light)",
          border: "var(--grey-border)",
        },
      },
      fontFamily: {},

      spacing: {},
    },
  },
  plugins: [],
};
