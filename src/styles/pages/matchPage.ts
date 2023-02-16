import { styled } from "stitches.config";

export const Container = styled('div', {
  backgroundColor: 'rgba(0,18,118,1)'
})

export const Main = styled('main', {
  maxWidth: '1280px',
  width: '100%',
  margin: '0 auto',
  padding: '3rem 0',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#fff',
})

export const HeaderContainer = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginBottom: '2rem',

  h1: {
    fontWeight: '500',
    letterSpacing: '-1px',
    fontSize: '1.5rem',
  },

  span: {
    marginTop: '0.5rem',
    color: '$blue100'
  }
})

export const Badge = styled('span', {
  display: 'block',
  // margin: '1rem',
  backgroundColor: '$blue500',
  padding: '0.275rem 1rem',
  fontWeight: '500',
  fontSize: '0.875rem',
  color: '#fff'
})

export const ScorerContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    '&:not(:nth-child(2))': {
      width: '50%',
    },

    '&:first-child': {
      justifyContent: 'flex-end',
      textAlign: 'right'
    },

    '&:nth-child(2)': {
      width: '10rem',
      margin: '0 2rem',
      padding: '0.275rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid $blue200'
    },

    h1: {
      fontSize: '2.25rem',
      fontWeight: '600'
    },

    h2: {
      fontWeight: '400',
    },

    img: {
      width: '5rem',
      height: '5rem',
      objectFit: 'contain'
    }
  }
})

export const InfoContainer = styled('div', {
  width: '100%',
  display: 'flex',
  marginTop: '1rem',

  section: {
    display: 'flex',
    gap: '0.5rem',
    flexDirection: 'column',

    '&:not(:nth-child(2))': {
      width: '50%',

      div: {
        display: 'flex',
        gap: '0.5rem',
        flexDirection: 'row',

        p: {
            color: '$blue100',
            fontWeight: '500'
        }
      }
    },

    '&:first-child': {
      alignItems: 'flex-end',
      textAlign: 'right',
    },

    '&:nth-child(2)': {
      width: '10rem',
      margin: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontSize: '0.875rem',
      color: '$blue100'
    },
  }
})

export const Heading = styled('h1', {
  color: '$blue900',
  fontWeight: '600',
  fontSize: '1.75rem',
  letterSpacing: '-1px',
  // textTransform: 'uppercase',
  // fontFamily: 'program-narrow, sans-serif',
})