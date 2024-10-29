/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F1722C",
        secondary: "#5A5A5A",
        header: "#2A2521",
        footer: "#F1F1F1",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
