/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ['"inter-variable"', "sans-serif"],
    },
    extend: {
      fontSize: {
        h1_sm: ["3.75rem", { lineHeight: "3.5625rem" }],
        h1_lg: ["6dvi", { lineHeight: "5dvi"}],
        base_sm: ["0.875rem", { lineHeight: "1.0625rem" }],
        base_lg: ["1dvi", { lineHeight: "1.3dvi" }],
        h2_sm: "2.5rem",
        h2_lg: "3dvi",
        cap_sm: ["1rem", { lineHeight: "1.125rem" }],
        cap_lg: ["1.3dvi", { lineHeight: "1.5dvi" }],
      },
    },
  },
  plugins: [],
};
