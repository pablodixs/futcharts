import { styled } from "stitches.config";

export const FeatureContainer = styled('section', {
  backgroundColor: '$blue900',
  color: '#fff',
  padding: '1rem',
  position: 'relative',

  h1:{
    letterSpacing: '-0.5px',
    fontWeight: '600'
  }
})

export const SectionRight = styled('div', {
  width: '100%',
  position: 'absolute',
  right: -1000,
  top: 0,
  bottom: 0,
  backgroundColor: '$blue900',
  zIndex: -1
})