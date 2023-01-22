import Image from 'next/image'
import { motion } from 'framer-motion'

import { SliderContainer } from './styles'

import heroImage from '../../assets/heroimage.webp'

export function MainSlider() {
  return (
    <SliderContainer href="#">
      <Image
        quality={100}
        src={heroImage}
        alt=""
        width={910}
        height={145}
        placeholder={'blur'}
        // blurDataURL={heroImage}
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
