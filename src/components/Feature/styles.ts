import { styled } from 'stitches.config'

export const FeatureContainer = styled('section', {
  color: '#fff',
  padding: '3rem 0',
  marginBottom: '1rem',
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(11, 60px 50px) 59px calc(50vw - 638px)',

  h1: {
    letterSpacing: '-0.5px',
    fontWeight: '600',
  },

  '&::after': {
    display: 'inline',
    content: '',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '-1',
    gridColumn: '1/-1',
    backgroundColor: '$blue900',
  },
})

export const NewsContainer = styled('div', {
  maxWidth: '1280px',
  width: '100%',
  margin: '0 auto',
  gridColumn: '2/24',

  '&:hover div:not(:hover)': {
    opacity: 0.5,
  },

  header: {
    marginBottom: '2rem',
    span: {
      color: '$blue100',
      fontWeight: '500',
    },

    h1: {
      position: 'relative',

      '&:before': {
        content: '',
        width: '10%',
        height: '3px',
        backgroundColor: '$blue200',
        position: 'absolute',
        bottom: '-0.4rem',
      },
    },
  },

  main: {
    display: 'flex',
    gap: '2rem',
    justifyItems: 'space-between',
  },
})

export const LastButton = styled('div', {
  width: '100%',
  transition: '$defaultTransition',

  span: {
    width: '100%',
    height: '185px',
    backgroundColor: '$blue500',
    transition: '$defaultTransition',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
      width: '70%',
      height: '70%',
      objectFit: 'contain',
    },

    svg: {
      fontSize: '4rem',
      color: '$blue200',
    },
  },

  h3: {
    fontWeight: '500',
    fontSize: '1rem',
    marginTop: '0.5rem',
    lineHeight: 1,
  },

  '&:hover': {
    span: {
      boxShadow: '0 0 0 2px #6675CB',
    },
  },
})
