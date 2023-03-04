import { ButtonLink } from '@/styles/pages/matchPage'
import { formatDateCompact } from '@/utils/timeFormat'
import Image from 'next/image'
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
            <Image src={match.teams.home.logo} alt='' />
          </div>
          <div>
            <h3>
              {match.goals.home} - {match.goals.away}
            </h3>
          </div>
          <div>
            <Image src={match.teams.away.logo} alt='' />
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
