import { ArrowUpRight } from 'phosphor-react'
import { motion } from 'framer-motion'

import { NewsCard } from '../NewsCard'
import { FeatureContainer, LastButton, NewsContainer } from './styles'

export function Feature() {
  return (
    <FeatureContainer>
      <NewsContainer>
        <header>
          <span>Últimas notícias</span>
          <h1>UEFA Champions League</h1>
        </header>
        <motion.main
          initial={{ x: 75, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            bounce: 0,
            type: 'spring',
            duration: 0.5,
            delay: 0.4,
          }}
        >
          <NewsCard
            title="Tudo sobre grandes penalidades: Quem marcou mais, quem tem maior
          eficácia e quem lidera em 2022/23"
            imageUrl="https://editorial.uefa.com/resources/027d-171e6e86dcd5-b21de22dd066-1000/fbl-eur-c1-juventus-benfica.jpeg"
          />
          <NewsCard
            title="UEFA muda local e final da Champions League será disputada em Paris"
            imageUrl="http://m.lance.com.br/files/admin_slider_thumbnail/uploads/2022/02/14/620acfb21cef9.jpeg"
          />
          <NewsCard
            title="Recordes das oitavas de final da Champions League: Ronaldo e Messi destacados"
            imageUrl="https://editorial.uefa.com/resources/027d-17194b440526-09b6dc2b2b4d-1000/format/wide1/paris_saint-germain_v_rb_leipzig_group_a_-_uefa_champions_league.jpeg?imwidth=2048"
          />
          <LastButton>
            <span>
              {/* <ArrowUpRight weight='regular' />  */}
              <img
                src="https://img.uefa.com/imgml/uefacom/ucl/2021/logos/logotype_dark.svg"
                alt=""
              />
            </span>
            <h3>
              UEFA.com <ArrowUpRight weight="bold" />
            </h3>
          </LastButton>
        </motion.main>
      </NewsContainer>
    </FeatureContainer>
  )
}
