/** @type {import('tailwindcss').Config} */
//
// Tailwind only generates the classes it can actually find by reading the
// files listed below. Anything it cannot see is left out of the compiled
// stylesheet and that part of the page renders unstyled.
//
// The previous list missed several folders that do use Tailwind classes:
// discussions/, reports/ and assistant/chats/. It also listed _parts/,
// _results/ and _discussions/, which do not exist in this repository.
//
module.exports = {
  content: [
    // Layouts and shared partials. This also covers the JavaScript inside
    // them, which adds classes at runtime with classList.add('...').
    './_layouts/**/*.html',
    './_includes/**/*.html',

    // Every published page, wherever it lives.
    './*.md',
    './*.html',
    './discussions/**/*.{html,md}',
    './reports/**/*.{html,md}',
    './addon/**/*.{html,md}',
    './assistant/**/*.{html,md}',
    './decoder/**/*.html',
    './refs/**/*.{html,md}',

    // Collections, in case they are ever populated.
    './_parts/**/*.{html,md}',
    './_results/**/*.{html,md}',
    './_discussions/**/*.{html,md}',
  ],

  // Classes that only ever appear at runtime, or that sit in files Tailwind
  // does not scan, must be listed by hand or they get stripped out.
  safelist: [
    'visible',
    'done',
    'active',
    'hidden',
    'flex',
    { pattern: /^(bg|text|border)-(slate|gray|cyan|blue|emerald|indigo|red|amber|green|purple)-(50|100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^opacity-(0|25|50|75|100)$/ },
    { pattern: /^translate-y-/ },
    { pattern: /^shadow-(sm|md|lg|xl)$/ },
  ],

  theme: {
    extend: {},
  },
  plugins: [],
}
