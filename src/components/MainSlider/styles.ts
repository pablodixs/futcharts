import { styled } from 'stitches.config'

export const SliderContainer = styled('a', {
  position: 'relative',

  img: {
    width: '910px',
    height: '415px',
    objectFit: 'cover',
    boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.1)',
    transition: '$defaultTransition',

    '&:hover': {
      boxShadow: '0 0 0 5px rgba(255, 255, 255, 0.1)',
    },
  },

  div: {
    backgroundColor: '$blue500',
    color: '#fff',
    padding: '1rem 1.275rem',
    width: 'auto',
    position: 'absolute',
    bottom: '1.5rem',
    left: '1.5rem',
    transition: '$defaultTransition',

    '&:before': {
      content: '',
      display: 'block',
      width: 0,
      height: '2px',
      backgroundColor: '$blue200',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      transition: '$defaultTransition',
    },

    '&:hover::before': {
      width: '100%',
    },

    span: {
      color: '$blue100',
      fontWeight: '400',
      fontSize: '1rem',
    },

    h1: {
      fontWeight: '600',
      fontSize: '1.25rem',
    },

    '&:hover': {
      backgroundColor: '$blue900'
    },
  },

  '@bp1': {
    marginTop: '-5rem',

    img: {
      width: '100%',
      height: '415px',
      objectFit: 'cover',
      boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.1)',
      transition: '$defaultTransition',
  
      '&:hover': {
        boxShadow: '0 0 0 5px rgba(255, 255, 255, 0.1)',
      },
    },
  }
})
