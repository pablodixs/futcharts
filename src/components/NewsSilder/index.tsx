import { NewsProps } from '@/utils/news'
import { motion } from 'framer-motion'
import { NewsCardRegular } from './NewsCard'
import { ContentContainer, NewsContainer } from './styles'

interface NewsSliderProps {
  data: NewsProps[]
}

export function NewsSlider({ data }: NewsSliderProps) {
  return (
    <ContentContainer>
    <h4>Últimas notícias</h4>
    <NewsContainer>
      {data?.map((news: NewsProps) => {
        return (
          <NewsCardRegular
            key={news.id}
            title={news.title}
            imageUrl={news.imageUrl}
            press={news.press}
          />
        )
      })}
    </NewsContainer>
    </ContentContainer>
  )
}
