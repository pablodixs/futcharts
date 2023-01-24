import Image from 'next/image'
import { styled } from 'stitches.config'

export const HeaderContainer = styled('header', {
  backgroundColor: '$blue500',
  color: '#fff',
  width: '100%',

  '@bp1': {
    top: 0,
    right: 0,
    left: 0,
  },
})

export const Container = styled('section', {
  maxWidth: '1280px',
  width: '100%',
  margin: '0 auto',
  padding: '2.25rem 0 5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '4rem',

  'svg.menu-icon': {
    display: 'none',
  },

  '@bp1': {
    justifyContent: 'space-between',
    padding: '1rem 1rem 5rem',

    'svg.menu-icon': {
      display: 'block',
      width: '2rem'
    },

    'svg.logo': {
      scale: 0.85,
    }
  },
})

export const SearchBarContainer = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  '@bp1': {
    display: 'none',
  },
})

export const SearchButton = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  position: 'absolute',
  right: 0,
  cursor: 'pointer',

  svg: {
    fontSize: '1.125rem',
  },
})

export const UserContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  strong: {
    fontWeight: '600',
  },

  '@bp1': {
    gap: 0,

    strong: {
      display: 'none',
    },
  },
})

export const Avatar = styled(Image, {
  borderRadius: '100%',
})
