export interface MatchProps {
  date: string
  mandante: string
  visitante: string
  mandanteLogo: string
  visitanteLogo: string
  hora: string
}

export interface LeagueProps {
  league: string
  round: string
  matches: MatchProps[]
}

export const brasileirao: LeagueProps = {
  league: 'Brasileirão Série A',
  round: 'Rodada 1',
  matches: [
    {
      date: 'Hoje',
      mandante: 'Flamengo',
      visitante: 'Palmeiras',
      mandanteLogo: '/flamengo.png',
      visitanteLogo: '/palmeiras.png',
      hora: '16h',
    },
    {
      date: 'Amanhã',
      mandante: 'Corinthians',
      visitante: 'São Paulo',
      mandanteLogo: '/corinthians.png',
      visitanteLogo: '/saopaulo.png',
      hora: '21h45',
    },
    {
      date: 'Segunda, 23 de feveireiro',
      mandante: 'Vasco',
      visitante: 'Cruzeiro',
      mandanteLogo: '/vasco.png',
      visitanteLogo: '/cruzeiro.png',
      hora: '19h',
    },
    {
      date: 'Segunda, 23 de feveireiro',
      mandante: 'Internacional',
      visitante: 'Goiás',
      mandanteLogo: '/internacional.png',
      visitanteLogo: '/goias.png',
      hora: '21h30',
    },
    {
      date: 'Terça, 24 de feveireiro',
      mandante: 'Fluminense',
      visitante: 'Santos',
      mandanteLogo: '/fluminense.png',
      visitanteLogo: '/santos.png',
      hora: '21h',
    },
  ],
}

export const premierleague: LeagueProps = {
  league: 'Premier League',
  round: 'Rodada 21',
  matches: [
    {
      date: 'Quarta, 15 de fevereiro',
      mandante: 'Club Brugge',
      visitante: 'Benfica',
      mandanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/c/cc/Club_Brugge_KV_Logo.png',
      visitanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/f/f0/500px-SL_Benfica_logo_svg.png',
      hora: '17h',
    },
    {
      date: 'Quarta, 22 de fevereiro',
      mandante: 'RB Leipzig',
      visitante: 'Manchester City',
      mandanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/6/65/RB_Leipzig_2020_Logo.png',
      visitanteLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png',
      hora: '17h',
    },
    {
      date: 'Terça, 21 de feveireiro',
      mandante: 'Liverpool',
      visitante: 'Real Madrid',
      mandanteLogo: 'https://seeklogo.com/images/L/liverpool-football-club-logo-F989101B10-seeklogo.com.png',
      visitanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png',
      hora: '17h',
    },
    {
      date: 'Terça, 14 de feveireiro',
      mandante: 'Milan',
      visitante: 'Tottenham',
      mandanteLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png',
      visitanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/6/6d/Tottenham_Hotspur.png',
      hora: '17h',
    },
    {
      date: 'Quarta, 15 de feveireiro',
      mandante: 'Borussia Dortmund',
      visitante: 'Chelsea',
      mandanteLogo: 'https://s.sde.globo.com/media/teams/2018/03/11/borussia-dortmund.svg',
      visitanteLogo: 'https://s.sde.globo.com/media/teams/2018/03/11/chelsea.svg',
      hora: '17h',
    },
  ],
}

export const championsleague: LeagueProps = {
  league: 'Champions League',
  round: 'Oitavas de final',
  matches: [
    {
      date: 'Quarta, 15 de fevereiro',
      mandante: 'Club Brugge',
      visitante: 'Benfica',
      mandanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/c/cc/Club_Brugge_KV_Logo.png',
      visitanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/f/f0/500px-SL_Benfica_logo_svg.png',
      hora: '17h',
    },
    {
      date: 'Quarta, 22 de fevereiro',
      mandante: 'RB Leipzig',
      visitante: 'Manchester City',
      mandanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/6/65/RB_Leipzig_2020_Logo.png',
      visitanteLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png',
      hora: '17h',
    },
    {
      date: 'Terça, 21 de feveireiro',
      mandante: 'Liverpool',
      visitante: 'Real Madrid',
      mandanteLogo: 'https://seeklogo.com/images/L/liverpool-football-club-logo-F989101B10-seeklogo.com.png',
      visitanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png',
      hora: '17h',
    },
    {
      date: 'Terça, 14 de feveireiro',
      mandante: 'Milan',
      visitante: 'Tottenham',
      mandanteLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png',
      visitanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/6/6d/Tottenham_Hotspur.png',
      hora: '17h',
    },
    {
      date: 'Quarta, 15 de feveireiro',
      mandante: 'Borussia Dortmund',
      visitante: 'Chelsea',
      mandanteLogo: 'https://s.sde.globo.com/media/teams/2018/03/11/borussia-dortmund.svg',
      visitanteLogo: 'https://s.sde.globo.com/media/teams/2018/03/11/chelsea.svg',
      hora: '17h',
    },
  ],
}

export const laliga: LeagueProps = {
  league: 'La Liga',
  round: 'Rodada 18',
  matches: [
    {
      date: 'Quarta, 15 de fevereiro',
      mandante: 'Club Brugge',
      visitante: 'Benfica',
      mandanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/c/cc/Club_Brugge_KV_Logo.png',
      visitanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/f/f0/500px-SL_Benfica_logo_svg.png',
      hora: '17h',
    },
    {
      date: 'Quarta, 22 de fevereiro',
      mandante: 'RB Leipzig',
      visitante: 'Manchester City',
      mandanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/6/65/RB_Leipzig_2020_Logo.png',
      visitanteLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png',
      hora: '17h',
    },
    {
      date: 'Terça, 21 de feveireiro',
      mandante: 'Liverpool',
      visitante: 'Real Madrid',
      mandanteLogo: 'https://seeklogo.com/images/L/liverpool-football-club-logo-F989101B10-seeklogo.com.png',
      visitanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png',
      hora: '17h',
    },
    {
      date: 'Terça, 14 de feveireiro',
      mandante: 'Milan',
      visitante: 'Tottenham',
      mandanteLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png',
      visitanteLogo: 'https://upload.wikimedia.org/wikipedia/pt/6/6d/Tottenham_Hotspur.png',
      hora: '17h',
    },
    {
      date: 'Quarta, 15 de feveireiro',
      mandante: 'Borussia Dortmund',
      visitante: 'Chelsea',
      mandanteLogo: 'https://s.sde.globo.com/media/teams/2018/03/11/borussia-dortmund.svg',
      visitanteLogo: 'https://s.sde.globo.com/media/teams/2018/03/11/chelsea.svg',
      hora: '17h',
    },
  ],
}
