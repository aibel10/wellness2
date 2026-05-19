import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: "#FF6B00", // Vibrant orange accent
        fern: "#FFAA00", // Bright gold accent
        clay: "#FF5500", // Dark orange / rust accent
        marigold: "#FFB700", // Yellow gold
        ink: "#FFFFFF", // White for text in dark mode
        mist: "#101D35", // Slate blue for cards
        linen: "#0B1224", // Deep navy for sections
      },
      boxShadow: {
        soft: "0 18px 55px rgba(5, 11, 20, 0.5)",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
