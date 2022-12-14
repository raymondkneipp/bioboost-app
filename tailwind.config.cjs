/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "0.75rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-jost)"],
      },
    },
  },
  plugins: [],
};
