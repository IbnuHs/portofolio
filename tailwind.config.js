/** @type {import('tailwindcss').Config} */
import frame from "./src/assets/Frame desktop.svg";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        frame: "url('./src/assets/Frame desktop.svg')",
      },
      aspectRatio: {
        "2/3": "2 / 3",
      },
    },
    fontFamily: {
      sora: ['"Sora"'],
    },
  },
  plugins: [],
};
