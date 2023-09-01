import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "1.2rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: ["2.2rem", "1.3"],
      xl: ["3rem", "1.2"],
      "2xl": ["4rem", "1.2"],
      "3xl": ["5rem", "1.2"],
      "4xl": ["6rem", "1"],
      "5xl": ["8rem", "1"],
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      Bai: ["Bai Jamjuree", "sans-serif"],
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.2rem",
      14: "5.6rem",
      15: "6rem",
      16: "6.4rem",
      17: "6.8rem",
      18: "7.2rem",
      19: "7.6rem",
      20: "8rem",
    },
    colors: {
      text: "#161818",
      background: "#f1f3f3",
      primary: "#48cae4",
      secondary: "#ccd0d1",
      accent: "#626d6f",
    },
    backgroundImage: {
      "primary-gradient":
        "linear-gradient(97deg, rgba(115,201,201,1) 26%, rgba(133,193,193,1) 43%, rgba(123,184,204,1) 60%, rgba(156,217,201,1) 93%, rgba(108,198,153,1) 97%)",
    },
    boxShadow: {
      primaryShadow: "box-shadow: 8px 10px 52px 0px rgba(115,201,201,0.93)",
    },
  },
  plugins: [],
};
export default config;
