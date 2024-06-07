const { Scale } = require("lucide-react");

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
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        customBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
        },
        blinkingBg: {
          "0%, 100%": { transform: "scale(1.93)" },
          "50%": { transform: "scale(2)" },
        },
        animateButton: {
          "0%": {
            background:
              "linear-gradient(to right, #ff2020 0%, #ff2020 25%, #ff2020 50%,#ff2020 75%, #4a4a4b 50%, #4a4a4b 100%)",
            backgroundSize: "200% 100%",
            backgroundPosition: "100% 0",
          },

          "100%": {
            background: "linear-gradient(to right, #ff2020 0%, #ff2020 100%)",
            backgroundSize: "200% 100%",
            backgroundPosition: "0% 0",
          },
        },
      },

      animation: {
        blinkingBg: "blinkingBg 2s ease-out infinite",
        animateButton: "animateButton 5s forwards",
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
