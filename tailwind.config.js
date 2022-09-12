/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctheme: {
          primary: "#2D89FF",
          secondary: "#642DFF",
          paragraph1: "#575757",
          textb: "#1E1E1E",
          'base-100': "#F7F7F7",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}