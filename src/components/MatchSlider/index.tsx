import { MatchContainer, SliderContainer } from './styles'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { MatchCard } from './MatchCard'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { SimpleButton } from '../Buttons/SimpleButtom'
import { ArrowButton, OptionsContainer } from './MatchCard/styles'
import { brasileirao, MatchProps } from '@/utils/matches'

export function MatchSlider() {
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 16,
    },
  })

  return (
    <MatchContainer>
      <header>
        <div>
          <h2>Brasileirão Série A</h2>
          <span>Rodada 1</span>
        </div>
        <OptionsContainer>
          <SimpleButton
            type="secondary"
            href="#"
            content="Ver todas as partidas"
          />
          <ArrowButton
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
          >
            <CaretLeft weight="bold" />
          </ArrowButton>
          <ArrowButton
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
          >
            <CaretRight weight="bold" />
          </ArrowButton>
        </OptionsContainer>
      </header>
      <SliderContainer ref={ref} className="keen-slider">
        {brasileirao.map((match: MatchProps, index) => {
          return (
            <div className={`keen-slider__slide number-slide${index}`}>
              <MatchCard data={match} />
            </div>
          )
        })}
      </SliderContainer>
    </MatchContainer>
  )
}
