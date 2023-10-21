/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#990F02",
        "secondary": {
          100: "#E2E2D5",
          200: "#888883",
        },
      }
    },
  },
  plugins: [],
}

