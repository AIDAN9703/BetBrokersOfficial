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
        'purple-1': '#a100ff',
        'white-000': '#ffff',
        'black-2': '#2b2b2b',
        'platinum-100': '#eaecec',
        },
      fontFamily: {
        'custom-font': ['MokotoGlitch', 'sans-serif'],
        'Bodoni': ['Bodoni', 'serif'],
        
      }
    },
  },
  plugins: [],
};
export default config;
