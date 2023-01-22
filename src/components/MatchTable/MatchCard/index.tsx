import Image from 'next/image'
import { GameCardContainer } from './styles'

interface GameCardProps {
  league: string
  homeTeam: string
  homeTeamLogo: any
  visitorTeam: string
  visitorTeamLogo: any
  horario: string
}

export function GameCard({
  homeTeam,
  league,
  horario,
  visitorTeam,
  homeTeamLogo,
  visitorTeamLogo,
}: GameCardProps) {
  return (
    <GameCardContainer href="#">
      <header>
        <h5>{league}</h5>
      </header>
      <main>
        <div>
          <Image quality={100} src={homeTeamLogo} alt="" width={36} height={36} />
          <span>{homeTeam}</span>
        </div>
        <section>
          <span>{horario}</span>
        </section>
        <div>
          <Image quality={100} src={visitorTeamLogo} alt="" width={36} height={36} />
          <span>{visitorTeam}</span>
        </div>
      </main>
    </GameCardContainer>
  )
}
