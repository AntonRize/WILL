/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './*.md',
    './*.html',
    './decoder/**/*.html',
    './assistant/**/*.html',
    './relativistic-foundations.md',
    './_parts/**/*.{html,md}',
    './_results/**/*.{html,md}',
    './_discussions/**/*.{html,md}',
    './_layouts/ouroboros.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
