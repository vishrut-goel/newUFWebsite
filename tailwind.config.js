/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F5EDE5',
          100: '#EDE3D9',
          200: '#DCBAA1',
          300: '#C49A7C',
          400: '#B0805F',
          500: '#9B6B4A',
          600: '#83573A',
          700: '#6A442C',
        },
        slate: {
          850: '#111827',
          900: '#0b0f19',
          950: '#070a11',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Abel', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
