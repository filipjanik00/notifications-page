/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      main: "Plus Jakarta Sans",
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        red: "hsl(1, 90%, 64%)",
        blue: "hsl(219, 85%, 26%)",
        veryLightGrayishBlue: "hsl(210, 60%, 98%)",
        lightGrayishBlue1: "hsl(211, 68%, 94%)",
        lightGrayishBlue2: "hsl(205, 33%, 90%)",
        grayishBlue: "hsl(219, 14%, 63%)",
        darkGrayishBlue: "hsl(219, 12%, 42%)",
        veryDarkBlue: "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
