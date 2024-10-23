import { defineConfig } from "@pandacss/dev";
import { info } from "console";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            value: "#921A40",
            300: { value: "#C75B7A" },
          },
          secondary: {
            value: "#D9ABAB",
            300: { value: "#F4D9D0" }
          },

          success: { value: "#4793AF" },
          error: { value: "#FF004D" },
          info: { value: "#322C2B" },

          background: { value: '#F4D9D0' },
          white: { value: '#F4F5F7' },
          backgroundSecondary: { value: '#f0f0f0' },
        }
      }
    },
  },


  // The output directory for your css system
  outdir: "styled-system",
});
