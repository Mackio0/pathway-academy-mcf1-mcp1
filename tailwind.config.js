/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans-serif"],
        hind: ["Hind", "sans-serif"],
        kite: ["Kite One", "sans-serif"],
      },
      fontSize: {
        h1: "49px", // use as className="text-h1"/"text-para1" etc.
        h2: "39px",
        para1: "20px",
        para2: "16px",
      },
      colors: {
        primary: {
          50: "#ecfdf6",
          100: "#d0fbe6",
          200: "#a5f5d2",
          300: "#6beabc",
          400: "#30d79f",
          500: "#0cbc87", // Main shade of Primary color
          600: "#02996f",
          700: "#017b5c", // Hover shade of Primary (used in PrimaryBtn hover color)
          800: "#04614a",
          900: "#04503e",
          950: "#012d24",
        }, // green
        secondary: "#FD7E14", // orange
        para1: "#737373", // n-500
        para2: "#D4D4D4", // n-300
        para3: "#404040", // n-700
        para4: "#525252", // n-600
        heroPara: "#F5F5F5", // n-100
        heading: "#171717", // n-900
        stokeColor: "#D4D4D4",
        footerColor: "#404040",
        starColor: "#F7C32E",
        bg1: "#EFFAF4", // used in the hero section of course-detail/...
        bg2: "#A4F4C5", // used in the hero section of support/privacy&policy/terms&conditions
      },
      spacing: {
        "section-spacing": "120px", // use as className="mb-section-spacing" or "mt-section-spacing"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
