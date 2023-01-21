import Image from 'next/image'
import { styled } from 'stitches.config'

export const HeaderContainer = styled('header', {
  backgroundColor: '$blue500',
  color: '#fff',
})

export const Container = styled('section', {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '2.25rem 0 5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '4rem'
})

export const SearchBarContainer = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
})

export const SearchButton = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  position: 'absolute',
  right: 0,
  cursor: 'pointer',

  svg: {
    fontSize: '1.125rem'
  }
})

export const UserContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  strong: {
    fontWeight: '600'
  },
})

export const Avatar = styled(Image, {
  borderRadius: '100%'
})