const { Scale, Forward } = require("lucide-react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-100%)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        // slideInY: {
        //   "0%": { transform: "translateY(-5%)" },
        //   "100%": { transform: "translateX(0)" },
        // },
        slideInX: {
          "0%": {
            // transform: "translateY(-5%)",
            transform: "translateX(-3%)",

            opacity: "0",
          },
          "100%": {
            // transform: "translateY(0)",
            transform: "translateX(-15)",
            opacity: "1",
          },
        },
        slideInY: {
          "0%": {
            transform: "translateY(-5%), translateX(0)",

            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(10), translateX(0)",
            opacity: "1",
          },
        },
        slideOutY: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-5%)",
            opacity: "0",
          },
        },

        customBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
        },
        blinkingBg: {
          "0%, 100%": { transform: "scale(1.93)" },
          "50%": { transform: "scale(2)" },
        },
      },

      animation: {
        fadeOut: "fadeOut 2s ease-out forwards",
        appear: "slideInX  0.5s ease-out ",
        appearHeader: "slideInY  0.5s ease-out ",
        appearFromTop: "slideInY 0.5s ease-out ",
        disAppear: "slideOutY  0.5s ease-out ",
        blinkingBg: "blinkingBg 2s ease-out infinite",
        fadeIn: "fadeIn 2s ease-in forwards",
        slideInBigText: "slideIn 0.8s ease-out forwards",
        slideInSmallText: "slideIn 1s ease-out forwards",
        slideInButton: "slideIn 1.2s ease-out forwards",
        customBounce: "customBounce 2s infinite",
      },

      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
