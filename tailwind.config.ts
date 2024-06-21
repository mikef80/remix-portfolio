import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
        roboto: "Roboto",
      },
    },
  },
  plugins: [],
} satisfies Config;
