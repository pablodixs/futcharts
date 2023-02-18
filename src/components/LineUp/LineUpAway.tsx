import { HeaderAway, PlayerAwayContainer } from './styles'

interface LineUpProps {
  data: any
}

export function LineUpAway({ data }: LineUpProps) {
  return (
    <div>
      <section>
        <HeaderAway>
          <h4>Técnico</h4>
          <span>{data.coach.name}</span>
          <span>{data.formation}</span>
        </HeaderAway>
        {data.startXI.map((player: any) => {
          return (
            <PlayerAwayContainer>
              <span>{player.player.name}</span>
              <h2>
                {player.player.number}
              </h2>
            </PlayerAwayContainer>
          )
        })}
      </section>
    </div>
  )
}
