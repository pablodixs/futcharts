import { motion } from 'framer-motion'
import { SimpleButton } from '../Buttons/SimpleButtom'
import { GameCard } from './MatchCard'
import { ContentMatchTable, MatchTableContainer } from './styles'

const container = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      bounce: false,
      type: 'spring',
    },
  },
}

export function MatchTable() {
  return (
    <MatchTableContainer>
      <header>
        <div>
          <h1>Partidas de hoje</h1>
          <span>Sábado, 21 de janeiro</span>
        </div>
        <SimpleButton type="primary" icon href="#" />
      </header>
      <motion.div variants={container} initial="hidden" animate="visible">
        <ContentMatchTable>
          <motion.div variants={item}>
            <GameCard
              homeTeam="Chelsea"
              visitorTeam="Liverpool"
              horario="12h30"
              league="Premier League"
              homeTeamLogo="/chelsea.png"
              visitorTeamLogo="/liverpool.png"
            />
          </motion.div>
          <motion.div variants={item}>
            <GameCard
              homeTeam="Flamengo"
              visitorTeam="Palmeiras"
              horario="16h00"
              league="Supercopa do Brasil"
              homeTeamLogo="/flamengo.png"
              visitorTeamLogo="/palmeiras.png"
            />
          </motion.div>
          <motion.div variants={item}>
            <GameCard
              homeTeam="Barcelona"
              visitorTeam="Real Madrid"
              horario="14h45"
              league="La Liga"
              homeTeamLogo="/barcelona.png"
              visitorTeamLogo="/realmadrid.png"
            />
          </motion.div>
        </ContentMatchTable>
      </motion.div>
    </MatchTableContainer>
  )
}
