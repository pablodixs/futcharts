import { styled } from "stitches.config";

export const FeatureContainer = styled('section', {
  backgroundColor: '$blue900',
  color: '#fff',
  padding: '2rem 0 2rem 2rem',
  marginBottom: '1rem',
  position: 'relative',

  h1:{
    letterSpacing: '-0.5px',
    fontWeight: '600'
  }
})

export const SectionRight = styled('div', {
  width: '100%',
  position: 'absolute',
  right: -1000,
  top: 0,
  bottom: 0,
  backgroundColor: '$blue900',
  zIndex: -1
})

export const NewsContainer = styled('div', {
  display: 'flex',
  gap: '2rem',
  justifyItems: 'space-between',

  '&:hover div:not(:hover)': {
    opacity: 0.7,
  },
})

export const LastButton = styled('div', {
  marginTop: '2rem',
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
      objectFit: 'contain'
    },

    svg: {
      fontSize: '4rem',
      color: '$blue200'
    }
  },

  h3: {
    fontWeight: '500',
    fontSize: '1rem',
    marginTop: '0.5rem',
    lineHeight: 1,
  },

  '&:hover': {
    span: {
      boxShadow: '0 0 0 2px #6675CB'
    }
  }
})