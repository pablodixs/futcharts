import { styled } from 'stitches.config'

export const MatchTableContainer = styled('div', {
  backgroundColor: '#fff',
  border: '1px solid $gray100',
  flex: 1,
  padding: '1.375rem',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    h1: {
      fontSize: '1.25rem',
      color: '$blue500',
      letterSpacing: '-0.5px',
    },

    span: {
      fontSize: '0.875rem',
      color: '$black100'
    }
  },
})

export const ContentMatchTable = styled('main', {
  '&:hover a:not(:hover)': {
    opacity: 0.5,
  },
})
