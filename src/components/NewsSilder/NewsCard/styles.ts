import { styled } from 'stitches.config'

export const CardContainer = styled('div', {
  width: '300px',
  transition: '$defaultTransition',
  display: 'inline-block',

  img: {
    width: '300px',
    height: '185px',
    objectFit: 'cover',
    overflow: 'hidden',
    transition: '$defaultTransition',
  },

  span: {
    margin: '0.5rem 0 0.25rem',
    display: 'block',
    color: '$black100',
    fontSize: '0.875rem',
    fontWeight: '500',
  },

  h3: {
    fontWeight: '500',
    fontSize: '1rem',
  },

  '&:hover': {
    img: {
      boxShadow: '0 0 0 2px #0019A9',
    },
    h3: {
      color: '$blue500',
    },
  },
})
