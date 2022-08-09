/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      keyframes: {
        float: {

          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        'App-logo-float': 'float infinite 3s ease-in-out',
      },
    },
  },
  plugins: [],
}
