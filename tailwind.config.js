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
    },
    fontFamily: {
      'manrope-light':['Manrope Light'],
'manrope':['Manrope'],
'manrope-regular':['Manrope Regular'],
'manrope-medium':['Manrope Medium'],
'manrope-semibold':['Manrope SemiBold'],
'manrope-bold':['Manrope Bold'],
'manrope-extrabold':['Manrope ExtraBold'],
'open-sans-light':['Open Sans-Light'],
'open-sans':['Open Sans'],
'open-sans-regular':['Open Sans-Regular'],
'open-sans-medium':['Open Sans-Medium.'],
'open-sans-italic':['Open Sans-Italic'],
'open-sans-mediumitalic':['Open Sans-MediumItalic'],
'open-sans-bold':['Open Sans-Bold'],
'open-sans-bolditalic':['Open Sans-BoldItalic'],
'open-sans-semibolditalic':['Open Sans-SemiBoldItalic'],
'open-sans-extrabold':['Open Sans-ExtraBold'],
'open-sans-extrabolditalic':['Open Sans-ExtraBoldItalic'],
'quantico':['Quantico'],
'quantico-regular':['Quantico-Regular'],
'quantico-italic':['Quantico-Italic'],
'quantico-bold':['Quantico-Bold'],
'quantico-bolditalic':['Quantico-BoldItalic'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
}