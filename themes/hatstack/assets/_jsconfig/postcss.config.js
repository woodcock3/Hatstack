// postcss.config.js

const autoprefixer = require("autoprefixer");
const purgecss = require('@fullhuman/postcss-purgecss');
const path = require("path");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")(path.resolve(__dirname) + '/assets/_jsconfig/tailwind.config.js'),
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [purgecss, autoprefixer] : []),
  ],
};
