/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vanilla: {
          red: '#D81E1E',
        },
        gold: {
          light: '#CAA550', // RGB(202, 165, 80)
          dark: '#CAA550'  // Using the same color for consistency
        }
      }
    },
  },
  plugins: [],
};