import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#1B9AAA",
        navy: "#1B3A6B",
        charcoal: "#3F4B56",
        ink: "#2D3640",
        muted: "#7A8590",
        cream: "#F4F7F9",
        "soft-teal": "#E6F4F6",
        background: "#FFFFFF",
        foreground: "#2D3640",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
