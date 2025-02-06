import type { Config } from "tailwindcss";

export default {
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
      },
      boxShadow: {
        'inset-black-desktop': 'inset 0 -5em 50px rgba(0, 0, 0, 0.5)',
        'inset-black-mobile': 'inset 5em 0 50px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config;
