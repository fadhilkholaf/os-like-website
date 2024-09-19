import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "space-white": "#FFF7F7",
        "space-lavender": "#C68FE6",
        "space-purple": "#6C48C5",
        "space-blue": "#1230AE",
      },
    },
  },
  plugins: [],
};
export default config;
