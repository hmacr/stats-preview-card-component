import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    colors: {
      'dark-blue': 'hsl(233, 47%, 7%)',
      'desaturated-blue': 'hsl(244, 38%, 16%)',
      'soft-violet': 'hsl(277, 64%, 61%)',
      white: {
        600: 'hsla(0, 0%, 100%, 0.6)',
        700: 'hsla(0, 0%, 100%, 0.75)',
        900: 'hsl(0, 0%, 100%)',
      },
    },
    fontFamily: {
      inter: ['Inter', ...defaultTheme.fontFamily.serif],
      'lexend-deca': ['Lexend Deca', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      backgroundImage: {
        'header-desktop': 'url("./images/image-header-desktop.jpg")',
        'header-mobile': 'url("./images/image-header-mobile.jpg")',
      },
    },
  },
};
