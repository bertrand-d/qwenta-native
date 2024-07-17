const colors = require("./constants/Colors")

module.exports = {
  content: ["./app/index.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors
    },
  },
  plugins: [],
}