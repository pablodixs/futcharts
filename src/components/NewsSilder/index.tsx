import { NewsCardRegular } from './NewsCard'
import { NewsContainer } from './styles'

export function NewsSlider() {
  return (
    <NewsContainer>
      <NewsCardRegular
        title="Haaland supera últimos artilheiros da Premier League e caminha para recorde"
        imageUrl="https://s2.glbimg.com/081NNmllTKH9d9mldxrHLzL7QTo=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/3/7/IWLrTbR7asnZ3Wvgca4A/2023-01-22t144357z-1341582675-up1ej1m14x7l7-rtrmadp-3-soccer-england-mci-wlv-report.jpg"
      />
      <NewsCardRegular
        title="Liverpool e Chelsea empatam sem gols e seguem no meio da tabela no Inglês"
        imageUrl="https://s2.glbimg.com/iEGDLQjO-F3UOD_MN3MFWHvECPo=/0x0:4377x2647/640x360/smart/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/6/w/6dbacBTR2sMLH0yh940w/2023-01-21t134137z-1815259694-up1ej1l121als-rtrmadp-3-soccer-england-liv-che-report.jpg"
      />
      <NewsCardRegular
        title="Chelsea contrata jovem atacante Madueke, do PSV, e amplia lista de reforços"
        imageUrl="https://s2.glbimg.com/Ka26-vIlIwLQu_UOE9TXNfNYVO0=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/3/w/ONBlkCThKiEbtAotbDcQ/madueke.jpg"
      />
      <NewsCardRegular
        title="Arsenal se aproxima da contratação de Trossard, do Brighton"
        imageUrl="https://s2.glbimg.com/QflPzUSWwTu4enCITKbRlfBqjO0=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/H/Y/BMhEaaSuC3OUmIQBBd4w/2022-10-29t140821z-86801114-up1eiat139v9k-rtrmadp-3-soccer-england-brh-che-report.jpg"
      />
    </NewsContainer>
  )
}
