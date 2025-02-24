/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {  // Use backgroundColor instead of colors
        dark: "#0f172a",
        primary: "#22c55e",
        accent: "#22d3ee"
      },
      textColor: {
        primary: "#0f172a",
        accent: "#22d3ee"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
