import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
  darkMode: "class",
  plugins: [typography(), forms()],
  theme: {
    extend: {
      fontFamily: {
        display: ["Outfit"],
      },
      colors: {
        primary: colors.red,
        secondary: colors.sky,
        gray: colors.zinc,
      },
    },
  },
};
