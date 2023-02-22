import { styled } from 'stitches.config'
import { MainContainer } from './homepage'
import * as Tabs from '@radix-ui/react-tabs'
import Link from 'next/link'

export const Container = styled('div', {
  background:
    'radial-gradient(circle, rgba(0,18,118,1) 0%, rgba(0,25,163,1) 50%, rgba(0,18,118,1) 100%)',
})

export const StickyHeader = styled('section', {
  position: 'fixed',
  top: '-70px',
  right: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#fff',
  zIndex: 100,
  borderBottom: '1px solid $gray100',
  borderTop: '3px solid $blue500',
  padding: '0.75rem 0',
  transition: 'all 300ms cubic-bezier(0,.5,.58,1)',

  img: {
    width: '2.5rem',
    height: '2.5rem',
    objectFit: 'contain',
  },

  h1: {
    color: '$blue900',
  },

  div: {
    '&:not(:nth-child(2))': {
      width: '80%',
    },

    '&:first-child': {
      a: {
        justifyContent: 'flex-end',
      },
    },

    '&:nth-child(2)': {
      width: '12rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      margin: '0 1rem',
      border: '1px solid $gray100',
      position: 'relative',

      span: {
        textAlign: 'center',
        fontSize: '0.875rem',
        lineHeight: '1.1',
      },

      p: {
        fontSize: '0.75rem',
        position: 'absolute',
        top: '-7px',
        fontWeight: '600',
        color: '#fff',
        padding: '0 5px',
        backgroundColor: '$blue500',
      },
    },

    a: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',

      h2: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '$black500',
        textTransform: 'uppercase',
      },
    },
  },

  '&.hide': {
    marginTop: '0',
  },

  '&.show': {
    marginTop: '70px',
  },
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
      // border: '2px solid $blue200',
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

  '@bp1': {
    div: {
      a: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        textAlign: 'center',

        h2: {
          fontSize: '1rem',
        },
      },

      '&:first-child': {
        a: {
          flexDirection: 'column-reverse',
        },
      },
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

  '@bp1': {
    gridTemplateColumns: '1fr',
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
  fontSize: '1.5rem',
  letterSpacing: '-1px',
  textAlign: 'center',
  textTransform: 'uppercase',
})

export const DetailsContainer = styled('aside', {
  div: {
    border: '2px solid $gray100',
    padding: '1rem 1rem 0.5rem',

    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      gap: '0.5rem',

      h3: {
        fontWeight: '600',
      },

      img: {
        width: '2.5rem',
        height: '2.5rem',
        objectFit: 'contain',
      },
    },
  },

  h4: {
    fontWeight: '500',
    color: '$blue500',
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
  position: 'relative',

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

export const ErrorContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',

  h1: {
    fontWeight: '500',
    color: '$blue900',
    margin: '2rem 0',
    fontSize: '1.5rem',
  },
})

export const Head2HeadContainer = styled('div', {
  width: '100%',

  h2: {
    fontWeight: '600',
    color: '$blue500',
    letterSpacing: '-1px',
    position: 'relative',

    '&:after': {
      content: '',
      width: '10%',
      height: '2px',
      backgroundColor: '$blue100',
      position: 'absolute',
      bottom: '-6px',
      left: 0,
    },
  },
})

export const ButtonLink = styled(Link, {
  backgroundColor: '$blue500',
  color: '#fff',
  fontSize: '0.75rem',
  padding: '0.5rem 1rem',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: '$defaultTransition',

  svg: {
    fontSize: '1rem',
  },

  '&:hover': {
    backgroundColor: '$blue900',
  },
})

export const Head2HeadFixture = styled('section', {
  width: '100%',
  borderBottom: '2px solid $gray100',
  padding: '1.5rem 0',

  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '1rem',

    span: {
      fontSize: '0.75rem',
      color: '$black100',
      fontWeight: '500',
      textTransform: 'uppercase',
      marginTop: '0.25rem',
    },

    h4: {
      textAlign: 'center',
      fontSize: '0.75rem',
      color: '$blue500',
      fontWeight: '500',
    },
  },

  footer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },

  section: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',

    '.lose': {
      opacity: '70%',
    },

    div: {
      display: 'flex',
      alignItems: 'center',

      '&:first-child': {
        justifyContent: 'flex-end',
      },

      '&:not(:nth-child(2))': {
        width: '100%',
        gap: '0.5rem',
      },

      '&:nth-child(2)': {
        width: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid $gray100',
        margin: '0 0.5rem',
        padding: '0.25rem 0',

        h3: {
          textAlign: 'center',
          color: '$blue900',
        },
      },

      img: {
        width: '2.5rem',
        height: '2.5rem',
        objectFit: 'contain',
      },
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
      flex: 1,
    },
    '.away': {
      backgroundColor: '$blue200',
    },
  },
})

export const LineUpContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  div: {
    width: '100%',
  },
})

export const TabsList = styled(Tabs.List, {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '2rem 0',
  boxShadow: 'inset 0 -1px 0 0 #F2F2F2, 0 1px 0 0 #F2F2F2',
  transition: '$defaultTransition',
})

export const TabsTrigger = styled(Tabs.Trigger, {
  backgroundColor: 'transparent',
  border: 'none',
  fontWeight: '400',
  textAlign: 'center',
  width: '100%',
  cursor: 'pointer',
  padding: '0.5rem 0',
  transition: '$defaultTransition',

  '&[data-state="active"]': {
    color: '$blue500',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
})

export const YellowCard = styled('div', {
  height: '1.2rem',
  width: '0.8rem',
  backgroundColor: '#fbb707',
  transform: 'rotate(20deg)',
  borderRadius: '2px',
})

export const SubstitutionContainer = styled('div', {
  div: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    marginTop: '0.5rem',

    '&:nth-child(2)': {
      h4: {
        color: '#38761D',
      },
    },

    '&:last-child': {
      h4: {
        color: '#cc0000',
        fontSize: '0.875rem',
      },
    },

    h4: {
      fontWeight: '500',
      textTransform: 'uppercase',
    },
  },
})

export const GoalContainer = styled('div', {
  padding: '1rem',
  background:
    'linear-gradient(90deg, rgba(0,25,169,1) 0%, rgba(0,18,118,1) 100%)',
  color: '#fff',
  borderRadius: '2px',

  h2: {
    color: '#fff',
    marginBottom: '0.5rem',
  },

  h4: {
    fontWeight: '500',
  },

  h5: {
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.7)',
  },
})

export const RedCard = styled('div', {
  height: '1.2rem',
  width: '0.8rem',
  backgroundColor: 'red',
  transform: 'rotate(20deg)',
  borderRadius: '2px',
})

export const IconContainer = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
})

export const EventsContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const EventContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '50px 1fr',
  padding: '0.5rem 0',
  margin: '0.5rem 0',
  borderBottom: '1px solid $gray100',
  width: '80%',

  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    span: {
      fontWeight: '500',
      fontSize: '0.875rem',
    },

    img: {
      width: '1.5rem',
      height: '1.5rem',
      objectFit: 'contain',
    },
  },

  main: {
    margin: '0.5rem 0',
    position: 'relative',

    h3: {
      fontWeight: '600',
      color: '$blue500',
      textTransform: 'uppercase',
      position: 'relative',
      marginBottom: '0.5rem',

      '&:after': {
        content: '',
        width: '5%',
        height: '3px',
        backgroundColor: '$blue100',
        position: 'absolute',
        bottom: '-2px',
        left: 0,
      },
    },

    span: {
      fontSize: '1rem',
    },

    p: {
      fontSize: '0.875rem',
      color: '#999999',
    },
  },

  div: {
    '&:first-child': {
      span: {
        width: '100%',
        fontFamily: 'program-narrow, sans-serif',
        fontWeight: '500',
        fontSize: '2rem',
        display: 'flex',
        justifyContent: 'center',
        color: '$blue900',
      },
    },
  },
})
