export interface MatchProps {
  date: string
  mandante: string
  visitante: string
  mandanteLogo: string
  visitanteLogo: string
  hora: string
}

export const brasileirao: MatchProps[] = [
  {
    date: 'Hoje',
    mandante: 'Flamengo',
    visitante: 'Palmeiras',
    mandanteLogo: '/flamengo.png',
    visitanteLogo: '/palmeiras.png',
    hora: '16h'
  },
  {
    date: 'Amanhã',
    mandante: 'Corinthians',
    visitante: 'São Paulo',
    mandanteLogo: '/corinthians.png',
    visitanteLogo: '/saopaulo.png',
    hora: '21h45'
  },
  {
    date: 'Segunda, 23 de feveireiro',
    mandante: 'Vasco',
    visitante: 'Cruzeiro',
    mandanteLogo: '/vasco.png',
    visitanteLogo: '/cruzeiro.png',
    hora: '19h'
  },
  {
    date: 'Segunda, 23 de feveireiro',
    mandante: 'Internacional',
    visitante: 'Goiás',
    mandanteLogo: '/internacional.png',
    visitanteLogo: '/goias.png',
    hora: '21h30'
  },
  {
    date: 'Terça, 24 de feveireiro',
    mandante: 'Fluminense',
    visitante: 'Santos',
    mandanteLogo: '/fluminense.png',
    visitanteLogo: '/santos.png',
    hora: '21h'
  },
]