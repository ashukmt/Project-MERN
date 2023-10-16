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
    extend: {},
  },
  plugins: [],
}

