/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#FFFFFF',
      'black': '#171717',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#525252',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'gradient-start': '#F9FAFB',
      'gradient-end': '#D2D6DB'
    },
    extend: {
      fontSize: {
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem'
      }
    },
  },
  plugins: [],
}

