module.exports = {
  enabled: process.env.HUGO_ENVIRONMENT === "production",
  content: ['./layouts/**/*.html'],
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
