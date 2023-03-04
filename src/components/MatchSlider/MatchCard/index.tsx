import { MatchProps } from '@/utils/matches'
import Image from 'next/image'
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
          <Image src={data?.mandanteLogo} alt="" />
        </div>
        <Horario>{data?.hora}</Horario>
        <div>
          <Image src={data?.visitanteLogo} alt="" />
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
