import Head from 'next/head'
import * as Progress from '@radix-ui/react-progress'
import { useRouter } from 'next/router'

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
  TeamsContainer,
  StatisticContainer,
  GridContainer,
  DetailsContainer,
  ContentGridContainer,
} from '@/styles/pages/matchPage'
import { matches, statistics } from '@/utils/matchChampions'
import { laliganews } from '@/utils/news'
import { formatDate, formatTime } from '@/utils/timeFormat'
import { StatisticBox } from '@/components/StatisticBox'

export default function MatchPage() {
  const router = useRouter()
  const { id } = router.query

  const idNumber = Number(id)

  const data = matches.find((match) => match.fixture.id === idNumber)

  const homeStats = statistics[0]
  const awayStats = statistics[1]

  const homeBallPoss = homeStats.statistics.find(
    (stat) => stat.type === 'Ball Possession'
  )
  const awayBallPoss = awayStats.statistics.find(
    (stat) => stat.type === 'Ball Possession'
  )

  return (
    <>
      <Head>
        <title>
          {data?.teams.home.name} x {data?.teams.away.name} -{' '}
          {data?.league.name} | Futcharts
        </title>
      </Head>
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
      <GridContainer>
        <div>
          <Heading>Estatísticas da partida</Heading>
          <TeamsContainer>
            <div>
              <img src={data?.teams.home.logo} />
              <h3>{data?.teams.home.name}</h3>
            </div>
            <div>
              <h3>{data?.teams.away.name}</h3>
              <img src={data?.teams.away.logo} />
            </div>
          </TeamsContainer>
          <ContentGridContainer>
            <StatisticContainer>
              <h3>Posse de bola</h3>
              <section>
                <span>{homeBallPoss?.value}</span>
                <span>{awayBallPoss?.value}</span>
              </section>
              <section>
                <div
                  className="home"
                  style={{ width: homeBallPoss?.value! }}
                ></div>
                <div
                  className="away"
                  style={{ width: awayBallPoss?.value! }}
                ></div>
              </section>
            </StatisticContainer>
            {statistics?.map((stat, index) => {
              return (
                <StatisticBox
                  data={stat}
                  index={index}
                />
              )
            })} 
          </ContentGridContainer>
        </div>
        <DetailsContainer>
          <span>Id: {id}</span>
        </DetailsContainer>
      </GridContainer>
      {/* <NewsSlider data={laliganews} /> */}
    </>
  )
}
