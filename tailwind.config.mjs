/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          light: '#7B40B7',
          dark: '#4A2374',
        },
        purple: {
          50: '#faf5ff',
          700: '#6b21a8',
          800: '#581c87',
        }
      },
    },
  },
  plugins: [],
};