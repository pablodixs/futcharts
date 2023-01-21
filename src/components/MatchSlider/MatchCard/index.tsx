import { MatchProps } from '@/utils/matches'
import { ArrowRight } from 'phosphor-react'
import { Horario, MatchCardContainer } from './styles'

interface MatchCardProps {
  data: MatchProps
}

export function MatchCard({ data }: MatchCardProps) {
  return (
    <MatchCardContainer>
      <header>
        <span>{data?.date}</span>
      </header>
      <main>
        <div>
          <span>{data?.mandante}</span>
          <img src={data?.mandanteLogo} alt="" />
        </div>
        <Horario>12h</Horario>
        <div>
          <img src={data?.visitanteLogo} alt="" />
          <span>{data?.visitante}</span>
        </div>
      </main>
      <footer>
        <a href="#">
          Detalhes da partida
          <ArrowRight weight="bold" />
        </a>
      </footer>
    </MatchCardContainer>
  )
}
