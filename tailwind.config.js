import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#040714",
        "bg-light": "#b8bac6",
        "golden-accent": "#d88e00",
      },
      fontFamily: {
        Satoshi: ["Satoshi", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
