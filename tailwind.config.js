/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-grey": "#e7e7e7",
        white: "#fff",
        red: "#e73539",
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
      "5xl": "1.333rem",
      base: "0.889rem",
      "31xl": "2.778rem",
      "14xl": "1.833rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-grey": "#e7e7e7",
        white: "#fff",
        red: "#e73539",
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
      "5xl": "1.5rem",
      base: "1rem",
      "31xl": "3.125rem",
      "14xl": "2.063rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
