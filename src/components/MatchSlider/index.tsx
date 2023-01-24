import { MatchContainer, SliderContainer } from './styles'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { MatchCard } from './MatchCard'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { SimpleButton } from '../Buttons/SimpleButtom'
import { ArrowButton, OptionsContainer } from './MatchCard/styles'
import { LeagueProps, MatchProps } from '@/utils/matches'

export function MatchSlider({ league, matches, round }: LeagueProps) {
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
    },
    breakpoints: {
      '(max-width: 640px)': {
        slides: { perView: 1, spacing: 5 },
      },
      '(min-width: 900px)': {
        slides: { perView: 2, spacing: 8 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 3, spacing: 16 },
      },
    },
  })

  return (
    <MatchContainer>
      <header>
        <div>
          <h2>{league}</h2>
          <span>{round}</span>
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
        {matches.map((match: MatchProps, index) => {
          return (
            <div
              key={index}
              className={`keen-slider__slide number-slide${index}`}
            >
              <MatchCard data={match} />
            </div>
          )
        })}
      </SliderContainer>
    </MatchContainer>
  )
}
