/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#121214",   // primary background (cooler black than a warm ink)
        surface: "#16221F",    // card/section surface, teal-tinted dark
        gold: "#C9A227",       // primary accent, brushed brass gold
        teal: "#2F8F80",       // secondary accent, matches their velvet couch
        tealBright: "#3FAE9C", // hover/active teal
        cream: "#EDE6D6",      // text on dark
        neon: "#FF4FA3",       // sparing accent, echoes their neon signage
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
