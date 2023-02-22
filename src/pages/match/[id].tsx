import Head from 'next/head'
import * as Tabs from '@radix-ui/react-tabs'
import { useRouter } from 'next/router'
import { ArrowsDownUp, CaretDown, CaretUp, SoccerBall } from 'phosphor-react'

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
  StickyHeader,
  LineUpContainer,
  TabsList,
  TabsTrigger,
  ErrorContainer,
  Head2HeadContainer,
  EventContainer,
  YellowCard,
  IconContainer,
  RedCard,
  SubstitutionContainer,
  GoalContainer,
  EventsContainer,
} from '@/styles/pages/matchPage'
import {
  headToChelsea,
  headToHead,
  lineUp,
  matches,
  matchEvents,
  statistics,
} from '@/utils/matchChampions'
import { formatDate, formatTime } from '@/utils/timeFormat'
import { useScrollDirectionPage } from '@/utils/useScroll'
import { LineUpHome } from '@/components/LineUp/LineUpHome'
import { LineUpAway } from '@/components/LineUp/LineUpAway'
import { HeadMatches } from '@/components/HeadMatches'
import { useState } from 'react'

export function Subst({ data }: any) {
  return (
    <SubstitutionContainer>
      <h3>Substituição</h3>
      <div>
        <CaretUp weight="bold" color="#38761D" />
        <h4>{data?.assist.name}</h4>
      </div>
      <div>
        <CaretDown weight="bold" color="#cc0000" />
        <h4>{data?.player.name}</h4>
      </div>
    </SubstitutionContainer>
  )
}

export function Goal({ data }: any) {
  return (
    <GoalContainer>
      <h2>GOL!</h2>
      <h4>
        {data.detail} por {data.player.name}
      </h4>
      <h5>Assistência de {data.assist.name}</h5>
      <p>{data.comments}</p>
    </GoalContainer>
  )
}

// async function getData(id: number) {
//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host': 'v3.football.api-sports.io',
//       'x-rapidapi-key': '635ada8ab3e8ca5494b644d1231223a4',
//     },
//   }

//   const response = await fetch(
//     `https://v3.football.api-sports.io/fixtures/events?fixture=${id}`, options
//   )

//   if (!response.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return response.json()
// }

interface EventsProps {
  time: any
  team: any
  player: any
  assist: any
  type: any
}

export default function MatchPage() {
  const router = useRouter()
  const { id } = router.query

  const idNumber = Number(id)

  // const eventsData = getData(idNumber)

  const data = matches.find((match) => match.fixture.id === idNumber)

  const homeStats = statistics[0]
  const awayStats = statistics[1]

  const { scrollDirection, isVisible } = useScrollDirectionPage()

  function getIcon(data: any) {
    if (data === 'Yellow Card') {
      return <YellowCard />
    }
    if (data === 'Red Card') {
      return <RedCard />
    }
    if (data === 'Normal Goal') {
      return <SoccerBall color="#0019A9" weight="fill" size={22} />
    }
    return <ArrowsDownUp color="gray" weight="bold" size={22} />
  }

  return (
    <>
      <Head>
        <title>
          {data?.teams.home.name} x {data?.teams.away.name} -{' '}
          {data?.league.name} | Futcharts
        </title>
      </Head>
      <StickyHeader
        className={
          isVisible
            ? 'hide'
            : 'show' && scrollDirection === 'down'
            ? 'hide'
            : 'show'
        }
      >
        <div>
          <a href={`/team/${data?.teams.home.id}`}>
            <h2>{data?.teams.home.name}</h2>
            <img
              src={data?.teams.home.logo}
              alt={`Escudo ${data?.teams.home.name}`}
            />
          </a>
        </div>
        <div>
          {data?.score.fulltime.away === null ? (
            <span>{formatTime(data?.fixture.date)}</span>
          ) : (
            <>
              <p>{data?.fixture.status.short}</p>
              <h1>
                {data?.score.fulltime.home} - {data?.score.fulltime.away}
              </h1>
            </>
          )}
        </div>
        <div>
          <a href={`/team/${data?.teams.away.id}`}>
            <img
              src={data?.teams.away.logo}
              alt={`Escudo ${data?.teams.away.name}`}
            />
            <h2>{data?.teams.away.name}</h2>
          </a>
        </div>
      </StickyHeader>
      <Container>
        <Main>
          <HeaderContainer>
            <h1>{data?.league.name}</h1>
            <span>{data?.league.round}</span>
          </HeaderContainer>
          <ScorerContainer>
            <div>
              <a href={`/team/${data?.teams.home.id}`}>
                <h2>{data?.teams.home.name}</h2>
                <img
                  src={data?.teams.home.logo}
                  alt={`Escudo ${data?.teams.home.name}`}
                />
              </a>
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
              <a href={`/team/${data?.teams.away.id}`}>
                <img
                  src={data?.teams.away.logo}
                  alt={`Escudo ${data?.teams.away.name}`}
                />
                <h2>{data?.teams.away.name}</h2>
              </a>
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
            <ErrorContainer>
              <h1>Que pena! Esse jogo ainda não começou.</h1>
              <Head2HeadContainer>
                <h2>Histórico de jogos</h2>
                {headToHead.map((match, index) => {
                  return <HeadMatches key={index} match={match} />
                })}
              </Head2HeadContainer>
            </ErrorContainer>
          ) : (
            <>
              <Heading>Match Centre</Heading>
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
              <Tabs.Root defaultValue="events">
                <TabsList>
                  <TabsTrigger value="events">Eventos</TabsTrigger>
                  <TabsTrigger value="statistics">Estatísticas</TabsTrigger>
                  <TabsTrigger value="lineup">Escalação</TabsTrigger>
                  <TabsTrigger value="headtohead">H2H</TabsTrigger>
                </TabsList>
                <div>
                  <Tabs.Content value="events">
                    <EventsContainer>
                      {matchEvents.map((event, index) => {
                        return (
                          <EventContainer key={index}>
                            <div>
                              <span>
                                {event.time.elapsed}' {event.time.extra}
                              </span>
                            </div>
                            <section>
                              <header>
                                <img src={event.team.logo} />
                                <span>{event.team.name}</span>
                              </header>
                              <main>
                                {event.type === 'subst' && (
                                  <Subst data={event} />
                                )}
                                {event.type === 'Goal' && <Goal data={event} />}
                                {event.type !== 'Goal' &&
                                event.type !== 'subst' ? (
                                  <>
                                    <h3>{event.type}</h3>
                                    <IconContainer>
                                      {getIcon(event.detail)}
                                    </IconContainer>
                                    <span>
                                      {event.detail} for {event.player.name}
                                    </span>
                                  </>
                                ) : (
                                  ''
                                )}
                                <p>{event.comments}</p>
                              </main>
                            </section>
                          </EventContainer>
                        )
                      })}
                    </EventsContainer>
                  </Tabs.Content>
                  <Tabs.Content value="statistics">
                    <ContentGridContainer>
                      <StatisticContainer>
                        <h3>Posse de bola</h3>
                        <section>
                          <span>{homeStats.statistics[9].value}</span>
                          <span>{awayStats.statistics[9].value}</span>
                        </section>
                        <section>
                          <div
                            className="home"
                            style={{ flex: homeStats.statistics[9].value! }}
                          ></div>
                          <div
                            className="away"
                            style={{ flex: awayStats.statistics[9].value! }}
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
                        <section>
                          <div
                            className="home"
                            style={{ flex: homeStats.statistics[2].value! }}
                          ></div>
                          <div
                            className="away"
                            style={{ flex: awayStats.statistics[2].value! }}
                          ></div>
                        </section>
                      </StatisticContainer>
                      <StatisticContainer>
                        <section>
                          <span>{homeStats.statistics[0].value}</span>
                          <h4>Chutes a Gol</h4>
                          <span>{awayStats.statistics[0].value}</span>
                        </section>
                        <section>
                          <div
                            role="progressbar"
                            className="home"
                            style={{ flex: homeStats.statistics[0].value! }}
                          ></div>
                          <div
                            className="away"
                            style={{ flex: awayStats.statistics[0].value! }}
                          ></div>
                        </section>
                      </StatisticContainer>
                      <StatisticContainer>
                        <section>
                          <span>{homeStats.statistics[1].value}</span>
                          <h4>Fora do Gol</h4>
                          <span>{awayStats.statistics[1].value}</span>
                        </section>
                        <section>
                          <div
                            className="home"
                            style={{ flex: homeStats.statistics[1].value! }}
                          ></div>
                          <div
                            className="away"
                            style={{ flex: awayStats.statistics[1].value! }}
                          ></div>
                        </section>
                      </StatisticContainer>
                      <StatisticContainer>
                        <section>
                          <span>{homeStats.statistics[3].value}</span>
                          <h4>Bloqueados</h4>
                          <span>{awayStats.statistics[3].value}</span>
                        </section>
                        <section>
                          <div
                            className="home"
                            style={{ flex: homeStats.statistics[3].value! }}
                          ></div>
                          <div
                            className="away"
                            style={{ flex: awayStats.statistics[3].value! }}
                          ></div>
                        </section>
                      </StatisticContainer>
                      <StatisticContainer>
                        <section>
                          <span>{homeStats.statistics[4].value}</span>
                          <h4>Dentro da Área</h4>
                          <span>{awayStats.statistics[4].value}</span>
                        </section>
                        <section>
                          <div
                            className="home"
                            style={{ flex: homeStats.statistics[4].value! }}
                          ></div>
                          <div
                            className="away"
                            style={{ flex: awayStats.statistics[4].value! }}
                          ></div>
                        </section>
                      </StatisticContainer>
                      <StatisticContainer>
                        <section>
                          <span>{homeStats.statistics[5].value}</span>
                          <h4>Fora da Área</h4>
                          <span>{awayStats.statistics[5].value}</span>
                        </section>
                        <section>
                          <div
                            className="home"
                            style={{ flex: homeStats.statistics[5].value! }}
                          ></div>
                          <div
                            className="away"
                            style={{ flex: awayStats.statistics[5].value! }}
                          ></div>
                        </section>
                      </StatisticContainer>
                      <StatisticContainer>
                        <h3>Defesa</h3>
                        <section>
                          <span>{homeStats.statistics[12].value}</span>
                          <h4>Defesas do Goleiro</h4>
                          <span>{awayStats.statistics[12].value}</span>
                        </section>
                        <section>
                          <div
                            className="home"
                            style={{ flex: homeStats.statistics[12].value! }}
                          ></div>
                          <div
                            className="away"
                            style={{ flex: awayStats.statistics[12].value! }}
                          ></div>
                        </section>
                      </StatisticContainer>
                      <StatisticContainer>
                        <section>
                          <span>{homeStats.statistics[8].value}</span>
                          <h4>Impedimentos</h4>
                          <span>{awayStats.statistics[8].value}</span>
                        </section>
                        <section>
                          <div
                            className="home"
                            style={{
                              flex:
                                homeStats.statistics[8].value === null
                                  ? '0'
                                  : homeStats.statistics[8].value!,
                            }}
                          ></div>
                          <div
                            className="away"
                            style={{ flex: awayStats.statistics[8].value! }}
                          ></div>
                        </section>
                      </StatisticContainer>
                      <StatisticContainer>
                        <section>
                          <span>{homeStats.statistics[7].value}</span>
                          <h4>Escanteios</h4>
                          <span>{awayStats.statistics[7].value}</span>
                        </section>
                        <section>
                          <div
                            className="home"
                            style={{ flex: homeStats.statistics[7].value! }}
                          ></div>
                          <div
                            className="away"
                            style={{ flex: awayStats.statistics[7].value! }}
                          ></div>
                        </section>
                      </StatisticContainer>
                      <StatisticContainer>
                        <section>
                          <span>{homeStats.statistics[6].value}</span>
                          <h4>Faltas</h4>
                          <span>{awayStats.statistics[6].value}</span>
                        </section>
                        <section>
                          <div
                            className="home"
                            style={{ flex: homeStats.statistics[6].value! }}
                          ></div>
                          <div
                            className="away"
                            style={{ flex: awayStats.statistics[6].value! }}
                          ></div>
                        </section>
                      </StatisticContainer>
                      <StatisticContainer>
                        <h3>Passes</h3>
                        <section>
                          <span>{homeStats.statistics[13].value}</span>
                          <h4>Total</h4>
                          <span>{awayStats.statistics[13].value}</span>
                        </section>
                        <section>
                          <div
                            className="home"
                            style={{ flex: homeStats.statistics[13].value! }}
                          ></div>
                          <div
                            className="away"
                            style={{ flex: awayStats.statistics[13].value! }}
                          ></div>
                        </section>
                      </StatisticContainer>
                      <StatisticContainer>
                        <section>
                          <span>{homeStats.statistics[14].value}</span>
                          <h4>Completos</h4>
                          <span>{awayStats.statistics[14].value}</span>
                        </section>
                        <section>
                          <div
                            className="home"
                            style={{ flex: homeStats.statistics[14].value! }}
                          ></div>
                          <div
                            className="away"
                            style={{ flex: awayStats.statistics[14].value! }}
                          ></div>
                        </section>
                      </StatisticContainer>
                      <StatisticContainer>
                        <section>
                          <span>{homeStats.statistics[15].value}</span>
                          <h4>Precisão</h4>
                          <span>{awayStats.statistics[15].value}</span>
                        </section>
                        <section></section>
                      </StatisticContainer>
                    </ContentGridContainer>
                  </Tabs.Content>
                  <Tabs.Content value="lineup">
                    <div>
                      <h2>Escalação</h2>
                      <LineUpContainer>
                        <LineUpHome data={lineUp[0]} />
                        <LineUpAway data={lineUp[1]} />
                      </LineUpContainer>
                    </div>
                  </Tabs.Content>
                  <Tabs.Content value="headtohead">
                    {headToChelsea.map((match, index) => {
                      return <HeadMatches key={index} match={match} />
                    })}
                  </Tabs.Content>
                </div>
              </Tabs.Root>
            </>
          )}
        </div>
        <DetailsContainer>
          <div>
            <header>
              <img src={data?.league.logo} />
              <h3>{data?.league.name}</h3>
            </header>
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
