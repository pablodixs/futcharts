import { styled } from 'stitches.config'

export const StickContainer = styled('header', {
  '&.hide': {
    marginTop: '-70px',
  },

  '&.show': {
    marginTop: '70px',
  },
})

export const HeaderContainer = styled('div', {
  position: 'fixed',
  top: '-70px',
  right: 0,
  left: 0,
  backgroundColor: '$blue500',
  zIndex: 1000,
  color: '#fff',
  transition: 'all 300ms cubic-bezier(0,.5,.58,1)',

  section: {
    maxWidth: '1280px',
    width: '100%',
    margin: '0 auto',
    padding: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '4rem',
  },

  '&.hide': {
    marginTop: '0',
  },

  '&.show': {
    marginTop: '70px',
  },

  '@bp1': {
    padding: '0 1rem',
  },
})
