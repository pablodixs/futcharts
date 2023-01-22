import { styled } from 'stitches.config'

export const MatchCardContainer = styled('main', {
  lineHeight: 1,
  border: '2px solid $gray100',
  transition: '$defaultTransition',

  '&:hover': {
    border: '2px solid $blue500',
  },

  header: {
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid $gray100',
    fontSize: '0.875rem',
    padding: '0.5rem',
    color: '$black100',
  },

  main: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    alignItems: 'center',
    padding: '1rem 0',

    div: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',

      img: {
        width: '1.75rem',
        height: '1.75rem',
        objectFit: 'contain',
      },

      span: {
        fontWeight: '600',
      }
    }
  },

  footer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',

    a: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.2rem',
      lineHeight: '1',
      fontSize: '0.875rem',
      color: '$blue500',
      fontWeight: '500',
      transition: '$defaultTransition',

      svg: {
        fontSize: '1rem',
        transition: '$defaultTransition',
      },

      '&:hover': {
        color: '$blue900',
        
        svg: {
          transform:'translateX(0.5rem)'
        }
      }
    }
  }
})

export const OptionsContainer = styled('div', {
  display: 'flex',
  gap: '0.5rem',
})

export const ArrowButton = styled('button', {
  backgroundColor: '$blue500',
  border: 'none',
  color: '#fff',
  height: '2rem',
  width: '2rem',
  lineHeight: '0',
  fontSize: '1.25rem',
  cursor: 'pointer',
  transition: '$defaultTransition',

  '&:hover': {
    backgroundColor: '$blue900',
    boxShadow: '0 0 0 2px #6675CB'
  }
})

export const Horario = styled('span', {
  color: '$blue500',
  padding: '0.4rem 1.25rem',
  border: '1px solid $gray100',
  fontWeight: '500',
})
