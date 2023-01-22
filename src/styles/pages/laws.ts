import { styled } from 'stitches.config'

export const HeroContainer = styled('section', {
  backgroundColor: '$blue500',
  color: '#fff',

  div: {
    '&:first-child': {
      maxWidth: '1280px',
      width: '100%',
      margin: '0 auto',
      padding: '1rem 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      position: 'relative',
      objectFit: 'hidden',
    },
  },
})

export const Heading = styled('h1', {
  fontFamily: 'Lexend Mega, sans-serif',
  letterSpacing: '-4px',
  textTransform: 'uppercase',
  fontWeight: '800',
  fontSize: '4rem',
  lineHeight: 1,
})
