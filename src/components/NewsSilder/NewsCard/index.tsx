import { motion } from 'framer-motion'
import { CardContainer } from './styles'

interface NewsCardProps {
  imageUrl: string
  title: string
}

export function NewsCardRegular({ imageUrl, title }: NewsCardProps) {
  return (
      <CardContainer>
        <img src={imageUrl} alt="" />
        <span>ge.com</span>
        <h3>{title}</h3>
      </CardContainer>
  )
}
