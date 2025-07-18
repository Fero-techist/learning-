/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust paths
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Use same name in HTML class
      },
    },
  },
  plugins: [],
};
