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
        fontSize: '2.5rem',
        marginBottom: '2rem',
        fontWeight: '600',
        letterSpacing: '-1px',
        position: 'relative',
        fontFamily: 'Lexend, sans-serif',
        textTransform: 'none',

        '&:before': {
          content: '',
          width: '10%',
          height: '5px',
          backgroundColor: '$blue200',
          position: 'absolute',
          bottom: '-0.75rem',
        },
      },
    },
  },
})

export const BodyContainer = styled(DefaultContainer, {
  padding: '2rem',
  maxWidth: '1000px',

  img: {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
  },

  p: {
    lineHeight: '1.75',
    fontSize: '1rem',
    fontWeight: '400',
    marginBottom: '1.5rem',
  },

  a: {
    fontWeight: '500',
    color: '$blue500',
  },

  figcaption: {
    fontWeight: '400',
    fontSize: '0.75rem',
    padding: '0.5rem 0',
    color: '$black100',
    marginBottom: '1.5rem',
    borderBottom: '1px solid $blue100',
  },

  li: {
    fontWeight: '600',
    fontSize: '1.125rem',
    marginBottom: '0.7rem',
    color: '$blue900',
  },
})

export const CalloutContainer = styled('div', {
  padding: '2rem',
  border: '2px solid $blue100',
  marginBottom: '2rem',
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',

  p: {
    '&:first-child': {
      marginBottom: '1rem',
    },
  },

  img: {
    width: '3rem',
    height: 'auto',
    objectFit: 'contain',
  },
})
