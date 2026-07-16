import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1e2d4a",
          dark: "#152238",
          light: "#2d3f5f",
        },
        gold: {
          DEFAULT: "#b8860b",
          light: "#d4a84b",
          dark: "#8b6914",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-source)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, rgba(30, 45, 74, 0.55) 0%, rgba(21, 34, 56, 0.72) 55%, rgba(21, 34, 56, 0.85) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
