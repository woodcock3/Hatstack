const path = require("path");

module.exports = {
  enabled: process.env.HUGO_ENVIRONMENT === "production",
  content: [path.resolve(__dirname) + "/layouts/**/*.html"],
  safelist: [],
  theme: {
    extend: {
      colors: {
        change: 'green',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
