import { styled } from 'stitches.config'

export const HeroContainer = styled('section', {
  maxWidth: '1280px',
  width: '100%',
  margin: '0 auto',
  marginTop: '-3rem',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1.75rem',

  '@bp1': {
    padding: '1rem',
    minWidth: '100%',
    width: '100%',
    flexDirection: 'column',
    margin: '0 auto',
    marginTop: 0,
  },
})

export const MainContainer = styled('main', {
  maxWidth: '1280px',
  width: '100%',
  margin: '2rem auto',
})
