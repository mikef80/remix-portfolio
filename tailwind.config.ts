import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        '1-col': '1 1 100%',
        '2-col': '1 1 calc(100% / 2)',
        '3-col':'1 1 calc(100% / 3)',
        '7-col':'1 1 calc(100% / 7)'
      },
      fontFamily: {
        raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
