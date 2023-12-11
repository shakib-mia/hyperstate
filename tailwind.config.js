/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
    },
    fontSize: {
      "7xl": "4.5rem",
      "6xl": "3.125rem",
      "5xl": "2.8125rem",
      "4xl": "1.75rem",
      "3xl": "1.5rem",
      "2xl": "1.4375rem",
      xl: "1.375rem",
      lg: "1.25rem",
      md: "1.125rem",
      base: "1rem",
      sm: "0.875rem",
      xs: "0.8125rem",
      xxs: "0.75rem",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      accent: {
        DEFAULT: "#FF3F3F",
        20: "#FF3F3F33",
      },
    },
    extend: {},
  },
  plugins: [],
};