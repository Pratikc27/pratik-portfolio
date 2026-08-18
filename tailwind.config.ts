import type { Config } from "tailwindcss";

/**
 * Single dark palette, one accent. Every colour used in the UI is a token here
 * so there are no one-off hex values scattered through the components.
 *
 * Contrast against `bg` (#0B0F14): text 15.9:1, muted 6.5:1, dim 4.5:1,
 * accent 10.3:1 — all at or above WCAG AA for their text sizes.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        surface: "#111823",
        "surface-hover": "#151E2B",
        border: "#1E2733",
        "border-strong": "#2B3846",
        text: "#E6EDF3",
        muted: "#8B98A5",
        dim: "#6E7D8C",
        accent: "#2DD4BF",
        "accent-hover": "#5EEAD4",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "72rem",
        prose: "40rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
