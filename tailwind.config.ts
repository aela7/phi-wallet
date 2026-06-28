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
        // Backgrounds — warm blacks
        "bg-base": "#08080A",
        "bg-surface": "#111110",
        "bg-card": "#1A1916",
        "bg-subtle": "#23211C",
        // Gold
        "gold-300": "#F7D870",
        "gold-400": "#F0C14B",
        "gold-500": "#D4AF37",
        "gold-600": "#B8962E",
        // Text
        "text-primary": "#FAFAF8",
        "text-secondary": "#A09E97",
        "text-tertiary": "#65625C",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        hero: ["clamp(3.5rem, 8vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(3rem, 6vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "gold-shimmer": "linear-gradient(105deg, #D4AF37 0%, #F7D870 45%, #D4AF37 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4AF37, #F0C14B)",
        "dark-gradient": "linear-gradient(180deg, #08080A 0%, #0D0C09 100%)",
        "hero-glow": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 70%)",
        "orb-glow": "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.18) 0%, transparent 70%)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(212,175,55,0.25)",
        "gold-glow-lg": "0 0 60px rgba(212,175,55,0.20)",
        "card": "0 1px 0 rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.03)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.2)",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { backgroundPosition: "200% center" },
          "50%": { backgroundPosition: "0% center" },
        },
        "float-up": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212,175,55,0.3)" },
          "50%": { boxShadow: "0 0 0 12px rgba(212,175,55,0)" },
        },
        "grain": {
          "0%, 100%": { backgroundPosition: "0 0" },
          "10%": { backgroundPosition: "-5% -10%" },
          "30%": { backgroundPosition: "3% 5%" },
          "50%": { backgroundPosition: "-3% 8%" },
          "70%": { backgroundPosition: "5% -3%" },
          "90%": { backgroundPosition: "-2% 6%" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s ease-in-out infinite",
        float: "float-up 4s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        grain: "grain 8s steps(10) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
