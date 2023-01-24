import { motion } from 'framer-motion'
import { CardContainer } from './styles'

interface NewsCardProps {
  imageUrl: string
  title: string
  press: string
}

export function NewsCardRegular({ imageUrl, title, press }: NewsCardProps) {
  return (
      <CardContainer>
        <img src={imageUrl} alt="" />
        <span>{press}</span>
        <h3>{title}</h3>
      </CardContainer>
  )
}
