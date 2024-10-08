const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        // fontFamily: {
        //     sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        // },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
        rotate: {
            '270': '270deg'
        },
        gridTemplateColumns: {
            '20': 'repeat(20, minmax(0, 1fr))',
        },
        gridTemplateRows: {
            '20': 'repeat(20, minmax(0, 1fr))',
        },
        gridColumn: {
            'span-18': 'span 18 / span 18',
            'span-20': 'span 20 / span 20',
        },
        gridRow: {
            'span-18': 'span 18 / span 18',
            'span-20': 'span 20 / span 20',
        },
        height: {
            'inherit': 'inherit',
            'fill-available': '-webkit-fill-available',
        },
        lineClamp: {
            10: '10',
          },
    },
},

plugins: [
    require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}

