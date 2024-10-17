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
        foreground: "var(--foreground)",
        gray: {
          100: "#CDD1D4",
          200: "#939EA4",
          300: "#5D6970",
        },
        main: {
          100: "#E7ECFF",
          200: "#929ECC",
          300: "#505F98",
          400: "#37447E",
          900: "#091133",
        },
      },
    },
  },
  plugins: [],
};
export default config;
