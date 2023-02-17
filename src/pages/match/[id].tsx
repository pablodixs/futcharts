import { NewsSlider } from '@/components/NewsSilder'
import { MainContainer } from '@/styles/pages/homepage'
import {
  Main,
  Container,
  ScorerContainer,
  Badge,
  InfoContainer,
  HeaderContainer,
  Heading,
  LocalSpan,
} from '@/styles/pages/matchPage'
import { matches } from '@/utils/matchChampions'
import { laliganews } from '@/utils/news'
import { formatDate, formatTime } from '@/utils/timeFormat'
import { format, formatDistanceToNow } from 'date-fns'
import moment from 'moment'
import { useRouter } from 'next/router'
import { SoccerBall } from 'phosphor-react'

export default function MatchPage() {
  const router = useRouter()
  const { id } = router.query

  const idNumber = Number(id)

  const data = matches.find((match) => match.fixture.id === idNumber)

  return (
    <>
      <Container>
        <Main>
          <HeaderContainer>
            <h1>{data?.league.name}</h1>
            <span>{data?.league.round}</span>
          </HeaderContainer>
          <ScorerContainer>
            <div>
              <h2>{data?.teams.home.name}</h2>
              <img
                src={data?.teams.home.logo}
                alt={`Escudo ${data?.teams.home.name}`}
              />
            </div>
            <div>
              {data?.score.fulltime.away === null ? (
                <span>{formatTime(data?.fixture.date)}</span>
              ) : (
                <h1>
                  {data?.score.fulltime.home} - {data?.score.fulltime.away}
                </h1>
              )}
            </div>
            <div>
              <img
                src={data?.teams.away.logo}
                alt={`Escudo ${data?.teams.away.name}`}
              />
              <h2>{data?.teams.away.name}</h2>
            </div>
          </ScorerContainer>
          <InfoContainer>
            <section>
              <div>
                {/* <span>Adeyemi</span>
                <p>63&apos;</p>
                <SoccerBall size={18} /> */}
              </div>
            </section>
            <section>
              <Badge>{data?.fixture.status.long}</Badge>
              <LocalSpan>
                {data?.fixture.venue.name}, {data?.fixture.venue.city}
              </LocalSpan>
            </section>
            <section>
              <div></div>
            </section>
          </InfoContainer>
          {/* <span>{formatDate()}</span> */}
        </Main>
      </Container>
      <MainContainer>
        <Heading>Detalhes da partida</Heading>
        <span>Id: {id}</span>
      </MainContainer>
      <NewsSlider data={laliganews} />
    </>
  )
}
