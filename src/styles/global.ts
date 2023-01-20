import { globalCss } from 'stitches.config'

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    fontFamily: 'Lexend, sans-serif',
    color: '$black800'
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  }
})
