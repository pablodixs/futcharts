import Head from 'next/head'
import { motion } from 'framer-motion'

import { Header } from '@/components/Header'
import { MainSlider } from '@/components/MainSlider'
import { MatchSlider } from '@/components/MatchSlider'
import { MatchTable } from '@/components/MatchTable'
import { HeroContainer, MainContainer } from '@/styles/pages/homepage'
import { Feature } from '@/components/Feature'

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Futcharts - Apaixonados por futebol</title>
      </Head>
      <Header />
      <HeroContainer>
        <MainSlider />
        <MatchTable />
      </HeroContainer>
      <MainContainer>
        <MatchSlider />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ bounce: 0, type: 'spring', duration: 0.4 }}
        >
          <Feature />
          <MatchSlider />
        </motion.div>
      </MainContainer>
    </>
  )
}
