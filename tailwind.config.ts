import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColorStart: "var(--bgColorStart)",
        bgColorEnd: "var(--bgColorEnd)",
        foreground: "var(--foreground)",
        primaryColor: "var(--primaryColor)",
      },
    },
  },
  plugins: [],
} satisfies Config;
