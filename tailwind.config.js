const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        'customGray': '#f8f8fe',
        'customBlue': '#4f94ff',
        'titleColor': '#424242',
        'subtitleColor': '#e2e2e2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-motion')
  ],
};
