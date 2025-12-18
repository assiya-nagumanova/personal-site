/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#4731D3', // Senin mor rengin
        'brand-green': '#CBF281',  // Senin yeşil rengin
        'dark-purple': '#171043',
        'dark-green': '#1A210B',
      }
    },
  },
  plugins: [],
}
