import Typography from "typography"
//import bootstrapTheme from "typography-theme-bootstrap"

//const typography = new Typography(bootstrapTheme)

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.66,
    scaleRatio: 3.157,
    headerFontFamily: ['sans-serif'],
    bodyFontFamily: ['Open Sans', 'sans-serif'],
    headerWeight: 700,
    googleFonts: [
      {
        name: 'sans-serif',
        styles: ['700'],
      },
      {
        name: 'Open Sans',
        styles: ['400'],
      },
    ],
  });

  // Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography