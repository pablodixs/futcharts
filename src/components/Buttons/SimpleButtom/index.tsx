import { ArrowRight } from 'phosphor-react'
import { styled } from 'stitches.config'

interface SimpleButtonProps {
  content?: string
  href: string
  type: 'primary' | 'secondary'
  icon?: boolean
}

const Link = styled('a', {
  display: 'flex',
  backgroundColor: '$blue500',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: '1',
  width: 'auto',
  padding: '0.4rem',
  height: '2rem',
  minWidth: '2rem',
  color: '#fff',
  gap: '0.4rem',
  transition: '$defaultTransition',

  svg: {
    fontSize: '1.25rem',
    color: '#fff',
  },

  variants: {
    type: {
      primary: {
        backgroundColor: '$blue500',
        color: '#fff',

        '&:hover': {
          backgroundColor: '$blue900',
          boxShadow: '0 0 0 2px #6675CB',
        },
      
      },
      secondary: {
        backgroundColor: '#fff',
        color: '$blue500',
        position: 'relative',

        svg: {
          color: '$blue500',
        },

        '&:before': {
          content: '',
          display: 'block',
          width: 0,
          height: '2px',
          backgroundColor: '$blue100',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          transition: '$defaultTransition',
        },

        '&:hover::before': {
          width: '100%',
        },
      },
    },
  },
})

export function SimpleButton({ content, href, type, icon }: SimpleButtonProps) {
  return (
    <Link type={type} href={href}>
      {!content ? '' : <span>{content}</span>}
      {!icon ? '' : <ArrowRight weight="bold" />}
    </Link>
  )
}
