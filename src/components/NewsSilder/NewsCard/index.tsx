import Image from 'next/image'
import { CardContainer } from './styles'

interface NewsCardProps {
  imageUrl: string
  title: string
  press: string
}

export function NewsCardRegular({ imageUrl, title, press }: NewsCardProps) {
  return (
      <CardContainer>
        <Image src={imageUrl} alt="" />
        <span>{press}</span>
        <h3>{title}</h3>
      </CardContainer>
  )
}
