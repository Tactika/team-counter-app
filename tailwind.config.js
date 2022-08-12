/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    screens: {
      'sm': { 'max': '650px' },
      // => @media (max-width: 650px) { ... }

      'md': { 'max': '800px' }
      // => @media (max-width: 800px) { ... }
    },
    extend: {
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        "App-logo-float": "float infinite 3s ease-in-out",
      },
    },
  },
  plugins: [],
};
