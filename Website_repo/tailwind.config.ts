import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bodiqo: {
          electric: "#2D7DFF",
          light: "#DCEBFF",
          charcoal: "#11161F",
          charcoalSoft: "#1A2331",
          white: "#F8FAFF"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(45,125,255,0.32), 0 14px 44px rgba(45,125,255,0.22)"
      },
      backgroundImage: {
        "bodiqo-grid":
          "linear-gradient(to right, rgba(45,125,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(45,125,255,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
