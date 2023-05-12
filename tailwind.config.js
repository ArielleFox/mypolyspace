/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './static/**/*.{html,js}',
    './templates/*.{html,js}',
    "./node_modules/flowbite/**/*.js",
    "./node_modules/@headlessui/**/*.js"
    ],
  theme: {
  fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
    spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}


