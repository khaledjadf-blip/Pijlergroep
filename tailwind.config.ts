import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0b",
          2: "#131315",
          3: "#1c1d1f",
          4: "#252628",
        },
        paper: {
          DEFAULT: "#f2f0ec",
          dim: "#c2c0bc",
        },
        fog: "#7f8083",
        line: {
          DEFAULT: "#242527",
          2: "rgba(51,52,54,0.5)",
        },
        brand: {
          red: "#d4191b",
          gold: "#c9962e",
          teal: "#2f8f83",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(0.65, 0.05, 0.36, 1)",
        "ease-out-quart": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        "scroll-line": "scroll-line 2.4s cubic-bezier(0.65, 0.05, 0.36, 1) infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% center" },
          "50%": { backgroundPosition: "100% center" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.35)" },
        },
        "scroll-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
