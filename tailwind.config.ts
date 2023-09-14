import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-primary": "#000000",
        "dark-secondary": "#0d0d0d",
        "light-primary": "#ffffff",
        "light-secondary": "#7e7e7e",
        "dark-background": "#181818",
        "color-primary": "#1b202c",
        "color-secondary": "#161923",
        "header-bg": "rgba(27, 27, 27, .26)",
        "header-border": "rgba(255, 255, 255, .1)",
        "footer-divider": "#2b2b2b",
      },
    },
  },
  plugins: [],
};
export default config;
