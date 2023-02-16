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
} from '@/styles/pages/matchPage'
import { laliganews } from '@/utils/news'
import { MapPin, SoccerBall } from 'phosphor-react'

export default function MatchPage() {
  return (
    <>
      <Container>
        <Main>
          <HeaderContainer>
            <h1>UEFA Champions League</h1>
            <span>Oitavas de final - Jogo 1 de 2</span>
          </HeaderContainer>
          <ScorerContainer>
            <div>
              <h2>Borussia Dortmund</h2>
              <img
                src="https://img.chelseafc.com/image/upload/v1661680174/logos/teams/157.png"
                alt=""
              />
            </div>
            <div>
              <h1>1 - 0</h1>
            </div>
            <div>
              <img
                src="https://clublogos.stadion.io/assets/ClubLogos/Football/English/630.png"
                alt=""
              />
              <h2>Chelsea</h2>
            </div>
          </ScorerContainer>
          <InfoContainer>
            <section>
              <div>
                <span>Adeyemi</span>
                <p>63'</p>
                <SoccerBall size={18} />
              </div>
              <div>
                <span>Adeyemi</span>
                <p>63'</p>
                <SoccerBall size={18} />
              </div>
            </section>
            <section>
              <Badge>Encerrado</Badge>
              <span>Signal Iduna Park</span>
            </section>
            <section>
              <div>
                <SoccerBall size={18} />
                <span>Adeyemi</span>
                <p>63'</p>
              </div>
            </section>
          </InfoContainer>
        </Main>
      </Container>
      <MainContainer>
        <Heading>Detalhes da partida</Heading>
      </MainContainer>
      <NewsSlider data={laliganews} />
    </>
  )
}
