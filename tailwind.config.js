/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#F11A23",
        brand: "#F11A23",
      },
      fontFamily: {
        "dela-gothic-one": ['"Dela Gothic One"', "cursive"],
        poppins: ["Poppins", "sans-serif"],
        caveat: ["Caveat", "cursive"],
      },
    },
  },
};
