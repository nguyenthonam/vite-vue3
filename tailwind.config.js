/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        80: "rgb(254,114,76,0.8)",
        50: "rgb(254,114,76,0.5)",
        20: "rgb(254,114,76,0.2)",
        DEFAULT: "#FE724C",
      },
      secondary: {
        80: "rgb(255,208,80,0.8)",
        50: "rgb(255,208,80,0.5)",
        20: "rgb(255,208,80,0.2)",
        DEFAULT: "#FFD050",
      },
      typo: {
        80: "rgb(26,29,38,0.8)",
        50: "rgb(26,29,38,0.5)",
        20: "rgb(26,29,38,0.2)",
        DEFAULT: "#1A1D26",
      },
      gray: {
        80: "rgb(168,172,185,0.8)",
        50: "rgb(168,172,185,0.5)",
        20: "rgb(168,172,185,0.2)",
        DEFAULT: "#A8ACB9",
        1: "#989CA3",
      },
    }, // colors
    boxShadow: {
      "02030": "0px 20px 30px rgba(0, 0, 0, 0.1)",
      2420: "2px 4px 20px rgba(0, 0, 0, 0.2)",
    }, // boxShadow
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 700,
      normal: "normal",
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["15px", "19px"],
      base: ["16px", "20px"],
      lg: ["18px", "22px"],
      xl: ["24px", "28px"],
      xxl: ["30px", "34px"],
      xxxl: ["36px", "40px"],
    },
    fontFamily: {
      "nunito-sans": ["Nunito Sans", "Roboto", "Helvetica Neue", "sans-serif"],
      "svn-poppins": ["SVN-Poppins", "Roboto", "Helvetica Neue", "sans-serif"],
      fas: "Fontawesome 6 Pro",
    }, // fontFamily
    screens: {
      tablet: "481px", // => @media (min-width: 481px) { ... }
      desktop: "1025px", // => @media (min-width: 1025px) { ... }
    },
  },
  plugins: [],
};
