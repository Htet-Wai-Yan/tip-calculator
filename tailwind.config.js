// To customize tailwind default values
module.exports = {

  // link to the file where tailwinds classes are used
  content: [
    './index.html'
  ],
  theme: {
    colors: {
      cyan: {
        100: '#f4fafa',
        200: '#c5e4e7',
        300: '#8fe2ea',
        600: '#26c0ab',
        900: '#00494d',
      },
      white: '#ffffff',
      gray: {
        400: '#bcbcbc'
      }
    },
    extend: {},
  },
  plugins: [],
}
