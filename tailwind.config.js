module.exports = {
  content: ["./src/**/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'txtc' : '#a9b1d6',
        'primc': '#bb9af7',
        'secc' : '#2ac3de',
        'bbg'  : '#1a1b26',
        'mxim' : '#00CA4E',
        'minm' : '#FFBD44',
        'clcs' : '#FF605C',
        'topba': '#1C1C1EFF',
        'hotpink': '#c70055',
        'turquoise': '#5fdfff',
        'orange': '#df5f00',
        'limegreen': '#87ff00',
        'purple': '#af5fff',
      },
      fontFamily: {
        Fira: ['Fira Code', 'sans-serif'],
        Quicksand: ['Quicksand', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        cascadia: ['Cascadia Code', 'sans-serif'],
      },
      backgroundImage: {
        'background': "url('/images/bg2.jpg')",
        'background2': "url('/images/bg1.jpg')",
        'logo': "url('/images/Logo2.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}