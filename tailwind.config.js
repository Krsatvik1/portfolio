/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ['"inter-variable"', "sans-serif"],
    },
    extend: {
      fontSize: {
        h1_sm: ["11dvi", { lineHeight: "9.5dvi" }],
        h1_lg: ["6dvi", { lineHeight: "5dvi"}],
        base_sm: ["3.2dvi", { lineHeight: "3.5dvi" }],
        base_lg: ["1dvi", { lineHeight: "1.3dvi" }],
        h2_sm: ["9dvi",{lineHeight: "8.5dvi"}],
        h2_lg: ["3dvi",{ lineHeight: "2.8dvi" }],
        cap_sm: ["3.5dvi", { lineHeight: "3.7dvi" }],
        cap_lg: ["1.3dvi", { lineHeight: "1.5dvi" }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
