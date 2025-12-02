/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enables dark mode toggle using class on <html>
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
