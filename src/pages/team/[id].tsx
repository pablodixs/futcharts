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
import { format } from 'date-fns'

export default function TeamPage() {
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
          {data?.fixture.status.long === 'Not Started' ? (
            <h1>Que pena! Esse jogo ainda não começou.</h1>
          ) : (
            <>
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
                <div>
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
                  <StatisticContainer>
                    <h3>Chutes</h3>
                    <section>
                      <span>{homeStats.statistics[2].value}</span>
                      <h4>Total</h4>
                      <span>{awayStats.statistics[2].value}</span>
                    </section>
                    <section></section>
                  </StatisticContainer>
                  <StatisticContainer>
                    <section>
                      <span>{homeStats.statistics[0].value}</span>
                      <h4>Chutes a Gol</h4>
                      <span>{awayStats.statistics[0].value}</span>
                    </section>
                    <section></section>
                  </StatisticContainer>
                  <StatisticContainer>
                    <section>
                      <span>{homeStats.statistics[1].value}</span>
                      <h4>Fora do Gol</h4>
                      <span>{awayStats.statistics[1].value}</span>
                    </section>
                    <section></section>
                  </StatisticContainer>
                  <StatisticContainer>
                    <section>
                      <span>{homeStats.statistics[3].value}</span>
                      <h4>Bloqueados</h4>
                      <span>{awayStats.statistics[3].value}</span>
                    </section>
                    <section></section>
                  </StatisticContainer>
                  <StatisticContainer>
                    <section>
                      <span>{homeStats.statistics[4].value}</span>
                      <h4>Dentro da Área</h4>
                      <span>{awayStats.statistics[4].value}</span>
                    </section>
                    <section></section>
                  </StatisticContainer>
                  <StatisticContainer>
                    <section>
                      <span>{homeStats.statistics[5].value}</span>
                      <h4>Fora da Área</h4>
                      <span>{awayStats.statistics[5].value}</span>
                    </section>
                    <section></section>
                  </StatisticContainer>
                  <StatisticContainer>
                    <h3>Defesa</h3>
                    <section>
                      <span>{homeStats.statistics[12].value}</span>
                      <h4>Defesas do Goleiro</h4>
                      <span>{awayStats.statistics[12].value}</span>
                    </section>
                    <section></section>
                  </StatisticContainer>
                  <StatisticContainer>
                    <section>
                      <span>{homeStats.statistics[8].value}</span>
                      <h4>Impedimentos</h4>
                      <span>{awayStats.statistics[8].value}</span>
                    </section>
                    <section></section>
                  </StatisticContainer>
                  <StatisticContainer>
                    <section>
                      <span>{homeStats.statistics[7].value}</span>
                      <h4>Escanteios</h4>
                      <span>{awayStats.statistics[7].value}</span>
                    </section>
                    <section></section>
                  </StatisticContainer>
                  <StatisticContainer>
                    <section>
                      <span>{homeStats.statistics[6].value}</span>
                      <h4>Faltas</h4>
                      <span>{awayStats.statistics[6].value}</span>
                    </section>
                    <section></section>
                  </StatisticContainer>
                  <StatisticContainer>
                    <h3>Passes</h3>
                    <section>
                      <span>{homeStats.statistics[13].value}</span>
                      <h4>Total</h4>
                      <span>{awayStats.statistics[13].value}</span>
                    </section>
                    <section></section>
                  </StatisticContainer>
                  <StatisticContainer>
                    <section>
                      <span>{homeStats.statistics[14].value}</span>
                      <h4>Completos</h4>
                      <span>{awayStats.statistics[14].value}</span>
                    </section>
                    <section></section>
                  </StatisticContainer>
                  <StatisticContainer>
                    <section>
                      <span>{homeStats.statistics[15].value}</span>
                      <h4>Precisão</h4>
                      <span>{awayStats.statistics[15].value}</span>
                    </section>
                    <section></section>
                  </StatisticContainer>
                </div>
                <div></div>
              </ContentGridContainer>
            </>
          )}
        </div>
        <DetailsContainer>
          <div>
            <h4>Data</h4>
            <span>{formatDate(data?.fixture.date!)}</span>
            <h4>Árbitro</h4>
            <span>
              {data?.fixture.referee === null ? 'TBD' : data?.fixture.referee}
            </span>
            <h4>ID da partida:</h4>
            <span>{id}</span>
          </div>
        </DetailsContainer>
      </GridContainer>
    </>
  )
}
