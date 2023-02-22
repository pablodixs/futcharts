import { styled } from "stitches.config";

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