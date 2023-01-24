import { styled } from 'stitches.config'

export const ContentContainer = styled('section', {
  maxWidth: '1280px',
  width: '100%',
  margin: '0 auto',

  h4: {
    fontWeight: '500',
    color: '$black100',
    margin: '1.5rem 0 1rem',
    fontSize: '1.125rem',
    position: 'relative',

    '&:before': {
      content: '',
      width: '3rem',
      height: '3px',
      backgroundColor: '$blue100',
      position: 'absolute',
      bottom: '-0.2rem',
    },
  },

  '@bp1': {
    padding: '0 1rem'
  }
})

export const NewsContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  '&:hover div:not(:hover)': {
    opacity: 0.7,
  },
})

export const NewsCard = styled('div', {
  width: '330px',
  transition: '$defaultTransition',
  display: 'inline-block',

  img: {
    width: '330px',
    height: '185px',
    objectFit: 'cover',
    overflow: 'hidden',
    transition: '$defaultTransition',
  },

  h3: {
    fontWeight: '500',
    fontSize: '1rem',
    marginTop: '0.5rem',
  },

  '&:hover': {
    img: {
      boxShadow: '0 0 0 2px #6675CB',
    },
  },

  '@bp1': {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',  

    img: {
      width: '100%',
    }
  }
})
