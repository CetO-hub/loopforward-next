/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine 7s infinite linear",
        typewriter: "typewriter 4s steps(44) 1s 1 normal both",
      },

      keyframes: {
        shine: {
          "0%": { "background-position": "0" },
          "50%": { "background-position": "110px" },
          "100%": { "background-position": "220px" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "210px" },
        },
      },
    },
  },
  plugins: [],
};
