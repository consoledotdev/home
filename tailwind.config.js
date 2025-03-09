/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode: "media",
  content: ["./web/templates/*.html"],
  theme: {
    extend: {
      colors: {
        'console-dark': '#0a0a0b',
        'console-category': '#ffa6ff',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        mono: ['Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}

