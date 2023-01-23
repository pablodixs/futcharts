import { globalCss, styled } from 'stitches.config'
import Link from 'next/link'

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    textRendering: 'geometricPrecision',
  },

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    fontFamily: 'Lexend, Helvetica, sans-serif',
    color: '$black800',
    overflowX: 'hidden',
    overflowY: 'scroll',
    minHeight: '100vh',

    '@bp1': {
      fontSize: '14px',
    },
  },

  a: {
    color: 'inherit',
    textDecoration: 'inherit',
  },

  'input, button, select, textarea': {
    fontFamily: 'inherit',
    color: 'inherit',
    fontSize: 'inherit',
  },
})

export const Input = styled('input', {
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  padding: '0.25rem 0',
  borderBottom: '2px solid $blue200',
  flex: 1,
  transition: '$defaultTransition',

  '&::placeholder': {
    color: '$blue100',
    fontWeight: '500',
  },

  '&:focus': {
    borderBottom: '2px solid #fff',
  },
})

export const LinkContainer = styled(Link, {
  position: 'relative',
  transition: '$defaultTransition',

  '&:before': {
    content: '',
    display: 'block',
    width: 0,
    height: '2px',
    backgroundColor: '$blue200',
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

export const DefaultContainer = styled('section', {
  maxWidth: '1280px',
  width: '100%',
  margin: '0 auto',
})

export const Divider = styled('hr', {
  margin: '1.5rem 0',
  border: '1px solid $blue100',
})  