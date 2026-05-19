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
        moss: "#2F6F57",
        fern: "#77A97A",
        clay: "#C86F5A",
        marigold: "#E9B44C",
        ink: "#17211D",
        mist: "#F4F7F1",
        linen: "#FFF8EF",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(23, 33, 29, 0.12)",
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
