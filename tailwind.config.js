/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cobalt:    { DEFAULT: '#1a237e', mid: '#283593', light: '#3949ab' },
        crimson:   { DEFAULT: '#7f0000', light: '#b71c1c' },
        gold:      { DEFAULT: '#c9a84c', light: '#e8c96b', dark: '#8a6c20' },
        ivory:     { DEFAULT: '#f5f0e8', dark: '#e8e0ce' },
        parchment: '#d4c5a0',
        stone:     { DEFAULT: '#0d0e1a', mid: '#12141f', deep: '#080910' },
        lead:      '#1a1c2a',
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', 'cursive'],
        heading: ['Cinzel', 'serif'],
        body:    ['"IM Fell English"', 'serif'],
        prose:   ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
