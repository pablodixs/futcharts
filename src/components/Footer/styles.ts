import { DefaultContainer, LinkContainer } from '@/styles/global'
import Link from 'next/link'
import { styled } from 'stitches.config'

export const FooterContainer = styled('footer', {
  backgroundColor: '$blue900',
  width: '100%',
  color: '#fff',
  borderBottom: '5px solid $blue500',
})

export const ContentContainer = styled(DefaultContainer, {
  padding: '2rem 0',
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  div: {
    '&.info': {
      marginBottom: '1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      div: {
        transition: '$defaultTransition',

        '&:hover a:not(:hover)': {
          opacity: 0.5,
        },

        a: {
          transition: '$defaultTransition',
          marginRight: '1rem',

          svg: {
            width: '1.75rem',
            transition: '$defaultTransition',
          },
        },
      },
    },

    '&.menus': {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '2rem 0',
      display: 'flex',
      justifyContent: 'space-between',

      div: {
        '&:hover a:not(:hover)': {
          opacity: 0.5,
        },

        h4: {
          fontWeight: '600',
          marginBottom: '0.75rem',
        },
      },

      '@bp1': {
        flexDirection: 'column',
      }
    },

    '&.copy': {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '2rem',

      span: {
        fontWeight: '400',
        fontSize: '0.875rem',
        lineHeight: 1,
      },
    },
  },
})

export const FooterLink = styled(LinkContainer, {
  fontSize: '0.875rem',
  marginLeft: '2rem',
})

export const MenuLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: '$defaultTransition',
  color: '$blue100',
  fontWeight: '400',
  padding: '0.5rem 0',

  '&:hover': {
    transform: 'translateX(4px)',
    color: '#fff',
  },
})
