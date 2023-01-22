import { styled } from 'stitches.config'
import { DefaultContainer } from '../global'

export const HeroContainer = styled('section', {
  backgroundColor: '$blue500',
  color: '#fff',

  div: {
    '&:first-child': {
      maxWidth: '1280px',
      width: '100%',
      margin: '0 auto',
      padding: '2rem',
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

  variants: {
    type: {
      topics: {
        color: '$blue500',
        fontSize: '3rem',
        marginBottom: '1rem',
        fontWeight: '900',
        letterSpacing: '-5px',
      },
    },
  },
})

export const BodyContainer = styled(DefaultContainer, {
  padding: '2rem',

  p: {
    lineHeight: '1.5',
    fontSize: '1rem',
  },
})


export const CalloutContainer = styled('div', {
  padding: '2rem',
  border: '2px solid $blue500',
  marginBottom: '2rem',
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',

  p: {
    '&:first-child': {
      marginBottom: '1rem',
    }
  },

  img: {
    width: '3rem',
    objectFit: 'contain'
  }
})