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
        ink: "var(--text-black)", // Pure black for headings/text
        "ink-slate": "var(--text-slate)", // Toggled slate/slate-300 text
        mist: "var(--bg-mist)", // Card background
        linen: "var(--bg-linen)", // Section background
        page: "var(--bg-page)", // Main background
        overlay: "var(--overlay-bg)", // Overlay background
        "overlay-alt": "var(--overlay-bg-alt)", // Alt overlay background
        
        "border-theme": "var(--border-theme)",
        "border-theme-hover": "var(--border-theme-hover)",
        "bg-card": "var(--bg-card)",
        "bg-card-hover": "var(--bg-card-hover)",
        "bg-button": "var(--bg-button)",
        "bg-button-hover": "var(--bg-button-hover)",
        "bg-header": "var(--bg-header)",
        "bg-footer": "var(--bg-footer)",
      },
      boxShadow: {
        soft: "0 18px 55px var(--shadow-color)",
      },
      backgroundImage: {
        "hero-overlay": "var(--hero-gradient)",
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
