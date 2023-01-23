import { styled } from 'stitches.config'

export const MatchContainer = styled('section', {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',

    div: {
      h2: {
        fontSize: '1.375rem',
        color: '$blue500',
        fontWeight: '600',
        letterSpacing: '-0.5px',
      },

      span: {
        color: '$black500'
      }
    },
  },
})

export const SliderContainer = styled('div', {
  padding: '1rem 0',
  // marginBottom: '1rem'
})