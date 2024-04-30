/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: {
          background: "#6f526d",
          backgrounColor:
            "bg-gradient-to-r from-[rgba(175,141,172,1)] to-[rgba(98,69,96,1)]",
          linear:
            "linear-gradient(90deg, rgba(175,141,172,1) 0%, rgba(98,69,96,1) 100%)",
        },
      },
      color: {
        "--tw-gradient-from": "#e5e7eb var(--tw-gradient-from-position)",
        "--tw-gradient-to":
          "rgb(229 231 235 / 0) var(--tw-gradient-to-position)",
        "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)",
      },
      fontFamily: {
        sans: ["var(--font-righteous)"],
      },
    },
  },
  plugins: [],
};
