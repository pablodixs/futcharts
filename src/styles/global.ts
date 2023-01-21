import { globalCss, styled } from 'stitches.config'
import Link from 'next/link'

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    textRendering: 'geometricPrecision'
  },

  body: {
    fontFamily: 'Lexend, sans-serif',
    color: '$black800'
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  'input, button, select, textarea': {
    fontFamily: 'inherit',
    color: 'inherit',
    fontSize: 'inherit',
  }
})

export const Input = styled('input', {
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  padding: '0.25rem 0',
  borderBottom: '2px solid $blue100',
  flex: 1,
  transition: '$defaultTransition',

  '&::placeholder': {
    color: '$blue100',
    fontWeight: '500',
  },

  '&:focus': {
    borderBottom: '2px solid #fff',
  }
})

export const LinkContainer = styled(Link, {
    position: 'relative',
    transition: '$defaultTransition',

    '&:before': {
      content: '',
      display: 'block',
      width: 0,
      height: '2px',
      backgroundColor: '$blue100',
      position: 'absolute',
      bottom: '-0.25rem',
      left: 0,
      right: 0,
      transition: '$defaultTransition',
    },

    '&:hover::before': {
      width: '100%',
    },
})