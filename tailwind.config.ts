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
        primary: {
          DEFAULT: "#0EA5E9",
          light: "#38BDF8",
          dark: "#0284C7",
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
        },
        accent: {
          DEFAULT: "#F472B6",
          light: "#F9A8D4",
          dark: "#EC4899",
          warm: "#FB923C",
        },
        bg: {
          DEFAULT: "#030712",
          elevated: "#0F172A",
          card: "rgba(15, 23, 42, 0.6)",
          subtle: "#1E293B",
        },
      },
      fontFamily: {
        pretendard: ["Pretendard Variable", "Pretendard", "sans-serif"],
        gmarket: ["GmarketSansMedium", "sans-serif"],
        display: ["Syne", "GmarketSansMedium", "sans-serif"],
        body: ["Outfit", "Pretendard Variable", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-left": "slideInLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-right": "slideInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "gradient": "gradient-shift 8s ease infinite",
        "shimmer": "shimmer 2s infinite",
        "scroll": "scroll 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": `
          radial-gradient(at 40% 20%, rgba(14, 165, 233, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(244, 114, 182, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(14, 165, 233, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(251, 146, 60, 0.08) 0px, transparent 50%)
        `,
      },
      boxShadow: {
        "glow-sm": "0 0 20px -5px rgba(14, 165, 233, 0.3)",
        "glow": "0 0 40px -10px rgba(14, 165, 233, 0.4)",
        "glow-lg": "0 0 60px -15px rgba(14, 165, 233, 0.5)",
        "glow-accent": "0 0 40px -10px rgba(244, 114, 182, 0.4)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
