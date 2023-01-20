/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1CA0E3",
          secondary: "#9EA6B5",
          accent: "#010101",
          neutral: "#FFFFFF",
          "base-100": "#ffffff",
        },
        dark: {
          primary: "#1CA0E3",
          secondary: "#9EA6B5",
          accent: "#010101",
          neutral: "#FFFFFF",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
