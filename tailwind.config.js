/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        cascadia: ['Cascadia Code', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'logo': "url('/photos/Logo2.png')"
      },
      colors: {
        'hotpink': '#c70055',
        'turquoise': '#5fdfff',
        'orange': '#df5f00',
        'limegreen': '#87ff00',
        'purple': '#af5fff',
      },
    },
  },
  plugins: [],
}
