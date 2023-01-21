import { LinkContainer } from '@/styles/global'
import Image from 'next/image'

import { SliderContainer } from './styles'

export function MainSlider() {
  return (
    <SliderContainer href="#">
      <Image
        quality={100}
        src={
          'https://resources.premierleague.com/photos/premierleague/photo/2023/01/21/50f39f77-6d8b-45c9-94d6-dee9bfb6a8ad/1458202075.jpg?width=1350&height=759'
        }
        alt=""
        width={910}
        height={145}
        placeholder="blur"
        blurDataURL="https://resources.premierleague.com/photos/premierleague/photo/2023/01/21/50f39f77-6d8b-45c9-94d6-dee9bfb6a8ad/1458202075.jpg?width=15&height=7,5"
      />
      <div>
        <span>Premier League</span>
        <h1>Partida entre Liverpool e Chelsea termina em empate</h1>
      </div>
    </SliderContainer>
  )
}
