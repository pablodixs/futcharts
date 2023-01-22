import Image from 'next/image'
import { motion } from 'framer-motion'

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
      />
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ bounce: 0, type: 'spring', duration: 0.5, delay: 0.3 }}
      >
        <span>Premier League</span>
        <h1>Partida entre Liverpool e Chelsea termina em empate</h1>
      </motion.div>
    </SliderContainer>
  )
}
