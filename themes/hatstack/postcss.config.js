// postcss.config.js

const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');
const postcssimport = require('postcss-import');

module.exports = {
  plugins: [
    postcssimport,
    tailwind,
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [autoprefixer] : [])
  ],
};
