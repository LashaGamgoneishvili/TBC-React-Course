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
      colors: {
        primary: {
          background: "#6f526d",
          backgrounColor:
            "bg-gradient-to-r from-[rgba(175,141,172,1)] to-[rgba(98,69,96,1)]",
          linear:
            "linear-gradient(90deg, rgba(175,141,172,1) 0%, rgba(98,69,96,1) 100%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-righteous)"],
      },
    },
  },
  plugins: [],
};
