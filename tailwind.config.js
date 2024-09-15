/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,php,js}",
    "./**/*.php",
    // "node_modules/preline/dist/*.js",
    // "!./node_modules/**/*"
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        heading: "var(--heading)",
        green: {
          light: "var(--green-light)",
        },
        ash: {
          dark: "var(--text)",
          mid: "var(--ash-mid)",
          light: "var(--ash-light)",
        },
        grey: {
          dark: "var(--grey-dark)",
          mid: "var(--grey-mid)",
          light: "var(--grey-light)",
        },
      },
      fontFamily: {
        newsreader: ["Newsreader", "serif"],
        lato: ["Lato", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
      },

      spacing: {},
    },
  },
  plugins: [require("preline/plugin")],
};
