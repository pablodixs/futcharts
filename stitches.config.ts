import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      blue100: '#6675CB',
      blue500: '#0019A9',
      blue900: '#001276',
      black800: '#242424',
      black100: '#404040',
      gray100: '#F2F2F2',
    },
    transitions: {
      defaultTransition: 'all 0.3s cubic-bezier(0,.5,.58,1)'
    }
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
  },
})