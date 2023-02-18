import { StatisticContainer } from '@/styles/pages/matchPage'
import { StatisticsProps } from '@/utils/matchChampions'

interface IStatisticProps {
  data: any
  index: number
}

export function StatisticBox({ data, index }: IStatisticProps) {
  // const homeData = data[0]
  // const awayData = data[1]

  return (
    <>
      {/* {data.statistics.map((item: any) => {
        return (
          <StatisticContainer>
            <h3>Chutes</h3>
            <section>
              <span>{item.value}</span>
              <h4>{item.type}</h4>
              <span>{item.value}</span>
            </section>
            <section>
              <div
                className="home"
                style={{ width: Number(homeData[0].value) }}
              ></div>
              <div
                className="away"
                style={{ width: Number(awayData[0].value) }}
              ></div>
            </section>
          </StatisticContainer>
        )
      })} */}
      <StatisticContainer>
        <h3>Chutes</h3>
        <section>
          <span>{data.statistics[0].value}</span>
          <h4>{data.statistics[0].type}</h4>
          <span>{data.statistics[0].value}</span>  
        </section>
        <section>
          {/* <div
          className="home"
          style={{ width: Number(homeData[0].value) }}
        ></div>
        <div
          className="away"
          style={{ width: Number(awayData[0].value) }}
        ></div> */}
        </section>
      </StatisticContainer>
    </>
  )
}
