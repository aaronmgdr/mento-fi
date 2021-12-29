// Should mostly match styles/Color.ts
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#2E3338',
      black50: '#939799',
      white: '#ffffff',
      gray: colors.gray,
      blue: colors.blue,
      red: colors.red,
      yellow: colors.amber,
      teal: colors.teal,
      green: {
        darkest: '#3DBB78',
        dark: '#43C37F',
        DEFAULT: '#45CD85',
        light: '#4CDA8F',
        lightest: '#5AE89D',
      },
      greengray: {
        darkest: '#C5D0CA',
        dark: '#D1DDD7',
        DEFAULT: '#DEE8E2',
        light: '#F0F5F3',
        lightest: '#F9FAFA',
      },
      bluegray: {
        DEFAULT: '#EAEFF0',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['serif'],
      mono: ['Roboto Mono', 'Courier New', 'monospace'],
    },
    extend: {
      spacing: {
        46: '11.5rem',
        100: '26rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
