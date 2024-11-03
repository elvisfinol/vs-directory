// tailwind.config.ts
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
  darkMode: "class",
  plugins: [typography(), forms()],
  theme: {
    extend: {
      fontFamily: {
        display: ["Scope One"],
      },
      colors: {
        primary: {
          '50': '#effafc',
          '100': '#d6f0f7',
          '200': '#b1e2f0',
          '300': '#7ccce4',
          '400': '#3facd1',
          '500': '#2596be',
          '600': '#20749a',
          '700': '#215e7d',
          '800': '#234f67',
          '900': '#214358',
          '950': '#112a3b',
        },
        secondary: colors.indigo,
        gray: colors.zinc,
      },
    },
  },
};