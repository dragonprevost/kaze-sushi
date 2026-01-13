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
        background: "var(--background)",
        backgroundDark: "var(--background-dark)",
        backgroundLight: "var(--background-light)",
        foreground: "var(--foreground)",
        foregroundDark: "var(--foreground-dark)",
        attention: "var(--attention)",
        attentionDark: "var(--attention-dark)",
        surface: "var(--surface)",
        surfaceDark: "var(--surface-dark)",
        primary: "var(--primary)",
        primaryDark: "var(--primary-dark)",
        secondary: "var(--secondary)",
        secondaryDark: "var(--secondary-dark)",
        link: "var(--link)",
        linkHover: "var(--link-hover)",
        muted: "var(--muted)",
        textLight: "var(--text-light)",
        textDark: "var(--text-dark)",
      },
      fontFamily: {
        sans: ["var(--font-noto)", "sans-serif"],
        heading: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
