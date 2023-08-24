import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {},

    letterSpacing: {
      // tightest: "-.075em",
      tighter: "-.04em",
      // tight: "-.025em",
      normal: "0",
      wide: ".2em",
      // wider: ".05em",
      widest: ".09em",
    },
  },
  plugins: [],
};
export default config;
