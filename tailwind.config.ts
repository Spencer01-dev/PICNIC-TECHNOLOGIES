import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        picnic: {
          green: "#15803d", // rich corporate green from screenshot
          greenDark: "#166534",
          greenLight: "#22c55e",
          greenBar: "#1b804b",
          mint: "#f0fdf4",
          mintBorder: "#bbf7d0",
          softBlue: "#eff6ff",
          blueBorder: "#bfdbfe",
          softPeach: "#fff7ed",
          peachBorder: "#fed7aa",
          purpleMetric: "#6366f1",
          dark: "#0b0f19",
          cardDark: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
