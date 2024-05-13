/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-grey": "#e7e7e7",
        red: "#e73539",
        white: "#fff",
        black: "#000",
        grey: "#444343",
      },
      spacing: {},
      fontFamily: {
        menu: "'Saira Condensed'",
        body: "Inter",
      },
    },
    fontSize: {
      base: "1rem",
      "14xl": "2.063rem",
      "31xl": "3.125rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
