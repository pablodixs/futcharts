import { styled } from 'stitches.config'

export const GameCardContainer = styled('a', {
  margin: '1.5rem 0',
  display: 'block',
  transition: '$defaultTransition', 

  header: {
    width: '100%',

    h5: {
      flex: 1,
      textAlign: 'center',
      fontWeight: '500',
      fontSize: '0.875rem',
    },
  },

  main: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    div: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '0.875rem',
      flex: 1,

      img: {
        objectFit: 'contain'
      }
    },

    section: {
      border: '1px solid $gray100',
      padding: '0.4rem 1rem',
      color: '$blue500',
      fontWeight: '500',
      fontSize: '1rem',
    },
  },
})
