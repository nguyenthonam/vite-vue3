/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        300: "#B34600",
        200: "#D95500",
        70: "#FF8332",
        40: "#FFC198",
        10: "#FFEFE5",
        DEFAULT: "#FF6400",
      },
      white: "#FFFFFF",
      borderElement: "#D1D1D6",
      gray: {
        80: "#1C1C1E",
        60: "#3A3A3C",
        40: "#636366",
        30: "#AEAEB2",
        20: "#D1D1D6",
        10: "#F2F2F7",
      },
      yellow: {
        50: "#FFE680",
        10: "#FFF0B3",
        DEFAULT: "#FFD326",
      },
      green: {
        50: "#30DA5B",
        10: "#CEFDD5",
        DEFAULT: "#20B845",
      },
      red: {
        50: "#FF6961",
        10: "#FFAAA6",
        DEFAULT: "#D70015",
      },
      purple: {
        50: "#DA8EFF",
        10: "#E6CDFD",
        DEFAULT: "#8943AB",
      },
      blue: "#3872DD",
    }, // colors
    fontSize: {
      10: ["10px", { lineHeight: "1.5" }],
      12: ["12px", { lineHeight: "1.5" }],
      14: ["14px", { lineHeight: "1.5" }],
      16: ["16px", { lineHeight: "1.5" }],
      18: ["18px", { lineHeight: "29px" }],
      20: ["20px", { lineHeight: "1.5" }],
      22: ["22px", { lineHeight: "36px" }],
      24: ["24px", { lineHeight: "1.5" }],
      28: ["28px", { lineHeight: "45px" }],
      30: ["30px", { lineHeight: "45px" }],
      32: ["32px", { lineHeight: "52px" }],
      34: ["34px", { lineHeight: "1.5" }],
      36: ["36px", { lineHeight: "1.5" }],
      40: ["40px", { lineHeight: "1.5" }],
      42: ["42px", { lineHeight: "1.5" }],
      48: ["48px", { lineHeight: "1.5" }],
    }, // fontSize
    borderRadius: {
      none: "0px",
      4: "4px",
      8: "8px",
      10: "10px",
      12: "12px",
      16: "16px",
      20: "20px",
      27: "27px",
      round: "50%",
    }, // borderRadius
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
    fontFamily: {
      "nunito-sans": ["Nunito Sans", "Roboto", "Helvetica Neue", "sans-serif"],

      "svn-poppins": ["SVN-Poppins", "Roboto", "Helvetica Neue", "sans-serif"],

      fas: "Fontawesome 6 Pro",
    }, // fontFamily
    fontStyle: {
      normal: "normal",
      italic: "italic",
    }, // fontStyle
    extend: {
      lineHeight: {
        17: "17px",
        24: "24px",
        29: "29px",
        36: "36px",
        42: "42px",
        45: "45px",
        50: "50px",
        52: "52px",
      },
      margin: {
        8: "8px",
        16: "16px",
      },
      flexBasis: {
        45: "45%",
        47: "47%",
      },
    },
  },
  plugins: [],
};
