/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          brand: {
            black: "#000F1C",
            dark: "#0B1828",
            DEFAULT: "#50A6D6",
            grey: "#475466",
            white: "#FFFFFF",
        },
      },
      fontFamily: {
        sourceSans: "'Source Sans Pro', sans-serif",
      },
    },
  },
  plugins: [],
};
