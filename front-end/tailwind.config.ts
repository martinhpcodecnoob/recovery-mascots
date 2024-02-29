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
        identipet: "#5F2ACB",
        hero_primary: "#E0DAF9",
        hero_secondary: "#5336BF",
        hero_ligth_secondary: "#9589C2",
        hero_black: "#525055",
        hero_accent: "#EB940E"
      },
    },
  },
  plugins: [],
};
export default config;
