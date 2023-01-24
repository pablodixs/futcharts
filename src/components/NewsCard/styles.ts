import { styled } from "stitches.config";

export const CardContainer = styled('div', {
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
    marginTop: '0.5rem'
  },

  '&:hover': {
    img: {
      boxShadow: '0 0 0 2px #6675CB'
    }
  },

  '@bp1': {
    
  }
})