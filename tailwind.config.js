/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shine: "shine 1.5s infinite",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      colors: {
        dark: "#000",
        light: "#ffffff",
        colorbase: "#0da0a5",
        hoverbase: "#187275",
      },
    },
  },
  plugins: [require("daisyui")],
};
