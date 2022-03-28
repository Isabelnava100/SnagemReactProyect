const { colors } = require('tailwindcss/defaultTheme');

function withOpacityValue(variable) {/*
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }*/
  return `var(${variable})`;
}

module.exports = {
  mode: 'jit',
  darkMode: 'class',// or 'media' or 'class'
  content: [
     './public/**/*.html',
    "./src/**/*.{js,jsx}",
  ],
  theme: { 
    extend: {
      colors: {
        whiteC: withOpacityValue('--w'),
       blackC: withOpacityValue('--b'),
      primary: withOpacityValue('--color-primary'),
      secondary: withOpacityValue('--color-secondary'),
      neutral: withOpacityValue('--color-neutral'),
      cancel: withOpacityValue('--color-cancel'),
      accept: withOpacityValue('--color-accept'),
      backgroundBody: withOpacityValue('--bg-body'),
      backgroundLayout: withOpacityValue('--bg-layout'),
      backgroundContainer: withOpacityValue('--bg-container'),
      backgroundGradient: withOpacityValue('--bg-gradient'),
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
}