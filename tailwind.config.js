// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,js}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".3125rem",
        sm: ".625rem",
        lg: "1.25rem",
        xl: "1.875rem",
        "2xl": "2.5rem",
      },
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      spacing: {
        7.5: "1.875rem",
        12.5: "3.125rem",
        15: "3.75rem",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        bubblegum: ["Bubblegum Sans", "cursive"],
      },
      colors: {
        primary: "#F7941E",
        secondary: "#1CBBB4",
        accent: "#73BE48",
        destructive: "#ED145B",
        warm: "#FFF0E5",
      },
      keyframes: {
        "up-down": {
          "50%": { transform: "translateY(-10px)" },
        },
        "left-right": {
          "50%": { transform: "translateX(14px)" },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
