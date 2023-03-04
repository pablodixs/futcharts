import Image from 'next/image'
import { CardContainer } from './styles'

interface NewsCardProps {
  imageUrl: string
  title: string
}

export function NewsCard({ imageUrl, title }: NewsCardProps) {
  return (
      <CardContainer>
        <Image src={imageUrl} alt="" />
        <h3>{title}</h3>
      </CardContainer>
  )
}
