import { styled } from 'stitches.config'

export const NavbarContainer = styled('nav', {
  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: '4rem',
    fontWeight: '500',

    '&:hover a:not(:hover)': {
      opacity: 0.5,
    },

    a: {
      position: 'relative',
      transition: '$defaultTransition',

      '&:before': {
        content: '',
        display: 'block',
        width: 0,
        height: '2px',
        backgroundColor: '$blue200',
        position: 'absolute',
        bottom: '-0.25rem',
        left: 0,
        right: 0,
        transition: '$defaultTransition',
      },

      '&:hover::before': {
        width: '100%',
      },

      li: {
        display: 'inline-block',
      },
    },
  },

  '@bp1': {
    display: 'none'
  }
})
