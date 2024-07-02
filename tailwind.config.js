module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375pxpx",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // Colors

        // Primary

        Nutmeg: "hsl(14, 45%, 36%)",
        DarkRaspberry: "hsl(332, 51%, 32%)",

        // Neutral

        DarkBlue: "hsl(228, 56%, 26%)",
        VeryDarkBlue: "hsl(229, 57%, 11%)",

        DesaturatedBlue: "hsl(238, 22%, 44%)",
        BrightBlue: "hsl(224, 93%, 58%)",
        ModerateCyan: "hsl(170, 45%, 43%)",
        IconGreen: "hsl(170, 45%, 43%)",
        LightGrayishBlue: "hsl(240, 75%, 98%)",
        LightGray: "hsl(0, 0%, 75%)",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        opensans: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
