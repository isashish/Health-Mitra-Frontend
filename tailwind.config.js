/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        accent: ["'Space Grotesk'", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f0faf8",
          100: "#d0f0ea",
          200: "#a2e1d5",
          300: "#5ecabb",
          400: "#31b3a4",
          500: "#1a9a8b",
          600: "#137b70",
          700: "#13625a",
          800: "#134e49",
          900: "#11403d",
        },
        accent: {
          400: "#f97316",
          500: "#ea6c0a",
        },
        dark: "#0a1628",
        light: "#f8fffe",
      },
    },
  },
  plugins: [],
}
