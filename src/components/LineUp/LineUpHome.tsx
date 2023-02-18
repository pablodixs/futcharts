import { HeaderHome, PlayerHomeContainer } from './styles'

interface LineUpProps {
  data: any
}

export function LineUpHome({ data }: LineUpProps) {
  return (
    <div>
      <section>
        <HeaderHome>
          <h4>Técnico</h4>
          <span>{data.coach.name}</span>
          <span>{data.formation}</span>
        </HeaderHome>
        {data.startXI.map((player: any) => {
          return (
            <PlayerHomeContainer>
              <h2>{player.player.number}</h2>
              <span>{player.player.name}</span>
            </PlayerHomeContainer>
          )
        })}
      </section>
    </div>
  )
}
