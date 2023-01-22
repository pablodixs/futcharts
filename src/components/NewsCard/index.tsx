import { motion } from 'framer-motion'
import { CardContainer } from './styles'

interface NewsCardProps {
  imageUrl: string
  title: string
}

export function NewsCard({ imageUrl, title }: NewsCardProps) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ bounce: 0, type: 'spring', duration: 0.5, delay: 0.4 }}
    >
      <CardContainer>
        <img src={imageUrl} alt="" />
        <h3>{title}</h3>
      </CardContainer>
    </motion.div>
  )
}
