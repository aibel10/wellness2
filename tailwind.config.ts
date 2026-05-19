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
        moss: "#2F6F57", // Forest green accent
        fern: "#77A97A", // Soft green accent
        clay: "#C86F5A", // Soft clay accent
        marigold: "#E9B44C", // Yellow gold
        ink: "#000000", // Pure black for headings/text
        mist: "#F4F7F1", // Light green-gray for cards
        linen: "#FFF8EF", // Light warm cream for sections
      },
      boxShadow: {
        soft: "0 18px 55px rgba(23, 33, 29, 0.08)",
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
