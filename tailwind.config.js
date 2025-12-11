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
        "light-sage": "#B7C29D",
        olive: "#47622A",
        forest: "#344E41",
        cream: "#EEE9BF",
        accent: "#CDB4DB",
        leaf: "#9FB878",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem"
      },

      fontFamily: {
        heading: ["var(--font-playfair)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};