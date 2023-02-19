/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "Michroma":["Michroma", "sans-serif"],
      "Inconsolata":["Inconsolata", "sans-serif"],
      "Inter":["Inter", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}
