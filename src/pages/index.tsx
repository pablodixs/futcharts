import Head from 'next/head'
import { motion } from 'framer-motion'

import { MainSlider } from '@/components/MainSlider'
import { MatchSlider } from '@/components/MatchSlider'
import { MatchTable } from '@/components/MatchTable'
import { BackItem, HeroContainer, MainContainer } from '@/styles/pages/homepage'
import { Feature } from '@/components/Feature'
import { brasileirao, championsleague, laliga, premierleague } from '@/utils/matches'
import { NewsSlider } from '@/components/NewsSilder'
import { Divider } from '@/styles/global'
import { laliganews, premiernews } from '@/utils/news'

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Futcharts - Apaixonados por futebol</title>
      </Head>
      <BackItem />
      <HeroContainer>
        <MainSlider />
        <MatchTable />
      </HeroContainer>
      <MainContainer>
        <MatchSlider
          league={brasileirao.league}
          matches={brasileirao.matches}
          round={brasileirao.round}
        />
        <Divider />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ bounce: 0, type: 'spring', duration: 0.4 }}
        >
          <Feature />
          <MatchSlider
            league={championsleague.league}
            matches={championsleague.matches}
            round={championsleague.round}
          />
        </motion.div>
        <Divider />
        <MatchSlider
          league={premierleague.league}
          matches={premierleague.matches}
          round={premierleague.round}
        />
        <NewsSlider data={premiernews} />
        <Divider />
        <MatchSlider
          league={laliga.league}
          matches={laliga.matches}
          round={laliga.round}
        />
        <NewsSlider data={laliganews} />
      </MainContainer>
    </>
  )
}
