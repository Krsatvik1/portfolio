/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ['"inter-variable"', "sans-serif"],
    },
    extend: {
      fontSize: {
        h1_sm: ["12dvi", { lineHeight: "11dvi" }],
        h1_lg: ["6dvi", { lineHeight: "5dvi"}],
        base_sm: ["3.2dvi", { lineHeight: "3.2dvi" }],
        base_lg: ["1dvi", { lineHeight: "1.3dvi" }],
        h2_sm: "9dvi",
        h2_lg: "3dvi",
        cap_sm: ["4dvi", { lineHeight: "4.1dvi" }],
        cap_lg: ["1.3dvi", { lineHeight: "1.5dvi" }],
      },
    },
  },
  plugins: [],
};
