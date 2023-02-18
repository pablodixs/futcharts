import { styled } from 'stitches.config'

const Header = styled('header', {
  margin: '1rem 0',
  textAlign: 'center',

  h4: {
    color: '$blue500',
    fontWeight: '500',
    fontSize: '0.875rem'
  },

  span: {
    '&:last-child': {
      display: 'block',
      color: '$black100',
      marginTop: '0.5rem'
    }
  }
})

export const HeaderHome = styled(Header, {
  textAlign: 'left',
})

export const HeaderAway = styled(Header, {
  textAlign: 'right',
})

export const PlayerHomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '1rem',

  h2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'program-narrow, sans-serif',
    fontSize: '2rem',
    fontWeight: '500',
    width: '2rem',
    height: '2rem',
    lineHeight: 1,
    color: '$blue900',
  },
})

export const PlayerAwayContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '0.5rem',
  marginBottom: '1rem',

  h2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'program-narrow, sans-serif',
    fontSize: '2rem',
    fontWeight: '500',
    width: '2rem',
    height: '2rem',
    lineHeight: 1,
    color: '$blue200',  
  },
})
