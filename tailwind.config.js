/** @type {import('tailwindcss').Config} */
var require 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'arimo': ['Arimo', 'sans-serif'],
      'alice': ['Alice', 'sans-serif'],
      'playfair-display': ['Playfair Display', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'sanchez': ['Sanchez', 'sans-serif']
    },
  },
  plugins: [require('daisyui')],
}