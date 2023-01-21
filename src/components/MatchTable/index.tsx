import { SimpleButton } from '../Buttons/SimpleButtom'
import { GameCard } from './MatchCard'
import { ContentMatchTable, MatchTableContainer } from './styles'

export function MatchTable() {
  return (
    <MatchTableContainer>
      <header>
        <div>
          <h1>Partidas de hoje</h1>
          <span>Sábado, 21 de janeiro</span>
        </div>
        <SimpleButton type='primary' icon href="#" />
      </header>
      <ContentMatchTable>
        <GameCard
          homeTeam="Chelsea"
          visitorTeam="Liverpool"
          horario="12h30"
          league="Premier League"
          homeTeamLogo='/chelsea.png'
          visitorTeamLogo='/liverpool.png'
        />
        <GameCard
          homeTeam="Flamengo"
          visitorTeam="Palmeiras"
          horario="16h00"
          league="Supercopa do Brasil"
          homeTeamLogo='/flamengo.png'
          visitorTeamLogo='/palmeiras.png'
        />
        <GameCard
          homeTeam="Barcelona"
          visitorTeam="Real Madrid"
          horario="14h45"
          league="La Liga"
          homeTeamLogo='/barcelona.png'
          visitorTeamLogo='/realmadrid.png'
        />
      </ContentMatchTable>
    </MatchTableContainer>
  )
}
