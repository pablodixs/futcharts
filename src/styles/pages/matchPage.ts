import { styled } from 'stitches.config'
import { MainContainer } from './homepage'

export const Container = styled('div', {
  backgroundColor: 'rgba(0,18,118,1)',
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
    color: '$blue100',
  },
})

export const Badge = styled('span', {
  display: 'block',
  // margin: '1rem',
  backgroundColor: '$blue500',
  padding: '0.275rem 1rem',
  fontWeight: '500',
  fontSize: '0.875rem',
  color: '#fff',
  textAlign: 'center',
})

export const LocalSpan = styled('span', {
  textTransform: 'capitalize',
  fontSize: '0.75rem',
})

export const ScorerContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',

  '.lose': {
    opacity: '0.75',
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    a: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },

    '&:not(:nth-child(2))': {
      width: '50%',
    },

    '&:first-child': {
      justifyContent: 'flex-end',
      textAlign: 'right',
    },

    '&:nth-child(2)': {
      width: '10rem',
      height: '3.4375rem',
      margin: '0 2rem',
      padding: '0.275rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid $blue200',
      textAlign: 'center',

      span: {
        fontWeight: '500',
        fontSize: '20px',
      },
    },

    h1: {
      fontSize: '2.25rem',
      fontWeight: '600',
    },

    h2: {
      fontWeight: '400',
    },

    img: {
      width: '4rem',
      height: '4rem',
      objectFit: 'contain',
    },
  },
})

export const GridContainer = styled(MainContainer, {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: '2rem',

  h1: {
    textAlign: 'center',
    letterSpacing: '-1px',
  },
})

export const InfoContainer = styled('div', {
  width: '100%',
  display: 'flex',
  marginTop: '1rem',

  section: {
    display: 'flex',
    gap: '0.5rem',
    flexDirection: 'column',
    textAlign: 'center',

    '&:not(:nth-child(2))': {
      width: '50%',

      div: {
        display: 'flex',
        gap: '0.5rem',
        flexDirection: 'row',

        p: {
          color: '$blue100',
          fontWeight: '500',
        },
      },
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
      color: '$blue100',
    },
  },
})

export const Heading = styled('h1', {
  color: '$blue900',
  fontWeight: '600',
  fontSize: '1.75rem',
  letterSpacing: '-1px',
  textAlign: 'center',
})

export const DetailsContainer = styled('aside', {
  div: {
    borderLeft: '3px solid $blue100',
    backgroundColor: '$blue500',
    padding: '1rem 1rem 0.5rem',
    color: '#fff',
  },

  h4: {
    fontWeight: '500',
    color: '$blue100',
    fontSize: '0.875rem',
  },

  span: {
    display: 'block',
    marginBottom: '1rem',
  },
})

export const ContentGridContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '3rem',
})

export const TeamsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1rem 0 2rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    img: {
      width: '2.5rem',
      height: '2.5rem',
      objectFit: 'contain',
    },

    h3: {
      fontWeight: '500',
    },
  },
})

export const StatisticContainer = styled('div', {
  marginBottom: '2rem',

  h3: {
    fontWeight: '500',
    fontSize: '1.125rem',
    color: '$blue500',
    textAlign: 'center',
    marginBottom: '1rem',
  },

  section: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',

    span: {
      textTransform: 'uppercase',
      fontFamily: 'program-narrow, sans-serif',
      fontSize: '2rem',
      fontWeight: '500',
      color: '$blue900',
    },

    h4: {
      fontWeight: '500',
      fontSize: '0.875rem',
      color: '$black100',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },

    div: {
      height: '5px',
      display: 'inline-block',
    },

    '.home': {
      backgroundColor: '$blue900',
    },
    '.away': {
      backgroundColor: '$blue200',
    },
  },
})
