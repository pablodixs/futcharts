import { ButtonLink } from '@/styles/pages/matchPage'
import { formatDateCompact } from '@/utils/timeFormat'
import { ArrowRight } from 'phosphor-react'
import { Head2HeadFixture } from './styles'

interface HeadToHeadProps {
  match: any
}

export function HeadMatches({ match }: HeadToHeadProps) {
  return (
    <>
      <Head2HeadFixture>
        <header>
          <h4>{match.league.name}</h4>
          <span>{formatDateCompact(match.fixture.date)}</span>
        </header>
        <section>
          <div>
            <span>{match.teams.home.name}</span>
            <img src={match.teams.home.logo} />
          </div>
          <div>
            <h3>
              {match.goals.home} - {match.goals.away}
            </h3>
          </div>
          <div>
            <img src={match.teams.away.logo} />
            <span>{match.teams.away.name}</span>
          </div>
        </section>
        <footer>
          <ButtonLink href={`/match/${match.fixture.id}`}>
            Detalhes da partida <ArrowRight weight="bold" />
          </ButtonLink>
        </footer>
      </Head2HeadFixture>
    </>
  )
}
