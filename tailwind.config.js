/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          brand: {
            secondary: "#000F1C",
            primary: "#0B1828",
            accent: "#50A6D6",
            text: "#475466",
            title: "#FFFFFF",
        },
      },
      fontFamily: {
        sourceSans: "'Source Sans Pro', sans-serif",
      },
    },
  },
  plugins: [],
};
