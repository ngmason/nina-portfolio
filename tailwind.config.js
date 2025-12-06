/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#A3B18A",
        lavender: "#CDB4DB",
        cream: "#FAF9F6",
        forest: "#344E41",
        navy: "#1D3557",
      },
    },
  },
  plugins: [],
};