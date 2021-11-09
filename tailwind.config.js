module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {
        '65': '65vh'
      },
      minWidth: {
        '350': '350px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
