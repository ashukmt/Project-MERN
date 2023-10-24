/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue|indigo|purple|pink|cyan|black|teal|orange|amber|yellow)-(100|200|300|400|500|600|700|800|50)/,
    },
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 45s linear infinite',
        'half-spin': 'spin 1s linear'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }       
    },
  },
  plugins: [],
}

