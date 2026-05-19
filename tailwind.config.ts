import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: "var(--color-moss)",
        fern: "var(--color-fern)",
        clay: "var(--color-clay)",
        marigold: "var(--color-marigold)",
        ink: "var(--color-ink)",
        mist: "var(--color-mist)",
        linen: "var(--color-linen)",
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
