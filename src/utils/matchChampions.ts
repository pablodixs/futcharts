interface FixtureProps {
  id: number
  referee: string | null
  timezone: string
  date: string
  timestamp: number
  periods: {
    first: number | null
    second: number | null
  }
  venue: {
    id: number | null
    name: string | null
    city: string | null
  }
  status: {
    long: string
    short: string
    elapsed: number | null
  }
}

interface LeagueProps {
  id: number
  name: string
  country: string
  logo: string
  flag: null | string
  season: number
  round: string
}

interface TeamsProps {
  home: {
    id: number
    name: string
    logo: string
    winner: boolean | null
  }
  away: {
    id: number
    name: string
    logo: string
    winner: boolean | null
  }
}

interface ScoreProps {
  halftime: {
    home: number | null
    away: number | null
  }
  fulltime: {
    home: number | null
    away: number | null
  }
  extratime: {
    home: number | null
    away: number | null
  }
  penalty: {
    home: number | null
    away: number | null
  }
}

export interface MatchProps {
  fixture: FixtureProps
  league: LeagueProps
  teams: TeamsProps
  goals: {
    home: number | null
    away: number | null
  }
  score: ScoreProps
}

export const matches: MatchProps[] = [
  {
    fixture: {
      id: 971799,
      referee: 'Jesus Gil Manzano, Spain',
      timezone: 'UTC',
      date: '2023-02-15T20:00:00+00:00',
      timestamp: 1676491200,
      periods: {
        first: 1676491200,
        second: 1676494800,
      },
      venue: {
        id: 19381,
        name: 'SIGNAL IDUNA PARK',
        city: 'Dortmund',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 2,
      name: 'UEFA Champions League',
      country: 'World',
      logo: 'https://media-3.api-sports.io/football/leagues/2.png',
      flag: null,
      season: 2022,
      round: 'Round of 16',
    },
    teams: {
      home: {
        id: 165,
        name: 'Borussia Dortmund',
        logo: 'https://media.api-sports.io/football/teams/165.png',
        winner: true,
      },
      away: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
        winner: false,
      },
    },
    goals: {
      home: 1,
      away: 0,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 1,
        away: 0,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 971800,
      referee: null,
      timezone: 'UTC',
      date: '2023-03-07T20:00:00+00:00',
      timestamp: 1678219200,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 519,
        name: 'Stamford Bridge',
        city: 'London',
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null,
      },
    },
    league: {
      id: 2,
      name: 'UEFA Champions League',
      country: 'World',
      logo: 'https://media-3.api-sports.io/football/leagues/2.png',
      flag: null,
      season: 2022,
      round: 'Round of 16',
    },
    teams: {
      home: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media-3.api-sports.io/football/teams/49.png',
        winner: null,
      },
      away: {
        id: 165,
        name: 'Borussia Dortmund',
        logo: 'https://media-3.api-sports.io/football/teams/165.png',
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 971801,
      referee: null,
      timezone: 'UTC',
      date: '2023-02-21T20:00:00+00:00',
      timestamp: 1677009600,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 550,
        name: 'Anfield',
        city: 'Liverpool',
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null,
      },
    },
    league: {
      id: 2,
      name: 'UEFA Champions League',
      country: 'World',
      logo: 'https://media-3.api-sports.io/football/leagues/2.png',
      flag: null,
      season: 2022,
      round: 'Round of 16',
    },
    teams: {
      home: {
        id: 40,
        name: 'Liverpool',
        logo: 'https://media.api-sports.io/football/teams/40.png',
        winner: null,
      },
      away: {
        id: 541,
        name: 'Real Madrid',
        logo: 'https://media.api-sports.io/football/teams/541.png',
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 971802,
      referee: null,
      timezone: 'UTC',
      date: '2023-03-15T20:00:00+00:00',
      timestamp: 1678910400,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 1456,
        name: 'Estadio Santiago Bernabéu',
        city: 'Madrid',
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null,
      },
    },
    league: {
      id: 2,
      name: 'UEFA Champions League',
      country: 'World',
      logo: 'https://media-3.api-sports.io/football/leagues/2.png',
      flag: null,
      season: 2022,
      round: 'Round of 16',
    },
    teams: {
      home: {
        id: 541,
        name: 'Real Madrid',
        logo: 'https://media.api-sports.io/football/teams/541.png',
        winner: null,
      },
      away: {
        id: 40,
        name: 'Liverpool',
        logo: 'https://media-3.api-sports.io/football/teams/40.png',
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1004015,
      referee: 'M. Ghorbal',
      timezone: 'UTC',
      date: '2023-02-11T15:30:00+00:00',
      timestamp: 1676129400,
      periods: {
        first: 1676129400,
        second: 1676133000,
      },
      venue: {
        id: 1106,
        name: 'Grand Stade de Tanger',
        city: 'Tanger',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 15,
      name: 'FIFA Club World Cup',
      country: 'World',
      logo: 'https://media-3.api-sports.io/football/leagues/15.png',
      flag: null,
      season: 2022,
      round: '3rd Place Final',
    },
    teams: {
      home: {
        id: 1577,
        name: 'Al Ahly',
        logo: 'https://media-3.api-sports.io/football/teams/1577.png',
        winner: false,
      },
      away: {
        id: 127,
        name: 'Flamengo',
        logo: 'https://media-3.api-sports.io/football/teams/127.png',
        winner: true,
      },
    },
    goals: {
      home: 2,
      away: 4,
    },
    score: {
      halftime: {
        home: 1,
        away: 1,
      },
      fulltime: {
        home: 2,
        away: 4,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 868248,
      referee: null,
      timezone: 'UTC',
      date: '2023-04-15T14:00:00+00:00',
      timestamp: 1681567200,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 8560,
        name: 'Goodison Park',
        city: 'Liverpool',
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-3.api-sports.io/football/leagues/39.png',
      flag: 'https://media.api-sports.io/flags/gb.svg',
      season: 2022,
      round: 'Regular Season - 31',
    },
    teams: {
      home: {
        id: 45,
        name: 'Everton',
        logo: 'https://media-3.api-sports.io/football/teams/45.png',
        winner: null,
      },
      away: {
        id: 36,
        name: 'Fulham',
        logo: 'https://media.api-sports.io/football/teams/36.png',
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1005649,
      referee: null,
      timezone: 'UTC',
      date: '2023-04-15T00:00:00+00:00',
      timestamp: 1681516800,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: null,
        name: null,
        city: null,
      },
      status: {
        long: 'Time to be defined',
        short: 'TBD',
        elapsed: null,
      },
    },
    league: {
      id: 71,
      name: 'Serie A',
      country: 'Brazil',
      logo: 'https://media.api-sports.io/football/leagues/71.png',
      flag: 'https://media-3.api-sports.io/flags/br.svg',
      season: 2023,
      round: 'Regular Season - 1',
    },
    teams: {
      home: {
        id: 127,
        name: 'Flamengo',
        logo: 'https://media-3.api-sports.io/football/teams/127.png',
        winner: null,
      },
      away: {
        id: 147,
        name: 'Coritiba',
        logo: 'https://media-3.api-sports.io/football/teams/147.png',
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
]

////////////////////////////////////////////////////////////////////////////////////////

interface StatsProps {
  type: string
  value: number | string | null
}

export interface StatisticsProps {
  team: {
    id: number
    name: string
    logo: string
  }
  statistics: StatsProps[]
}

export const statistics: StatisticsProps[] = [
  {
    team: {
      id: 165,
      name: 'Borussia Dortmund',
      logo: 'https://media.api-sports.io/football/teams/165.png',
    },
    statistics: [
      {
        type: 'Shots on Goal',
        value: 2,
      },
      {
        type: 'Shots off Goal',
        value: 5,
      },
      {
        type: 'Total Shots',
        value: 14,
      },
      {
        type: 'Blocked Shots',
        value: 7,
      },
      {
        type: 'Shots insidebox',
        value: 8,
      },
      {
        type: 'Shots outsidebox',
        value: 6,
      },
      {
        type: 'Fouls',
        value: 13,
      },
      {
        type: 'Corner Kicks',
        value: 5,
      },
      {
        type: 'Offsides',
        value: null,
      },
      {
        type: 'Ball Possession',
        value: '48%',
      },
      {
        type: 'Yellow Cards',
        value: 6,
      },
      {
        type: 'Red Cards',
        value: null,
      },
      {
        type: 'Goalkeeper Saves',
        value: 7,
      },
      {
        type: 'Total passes',
        value: 450,
      },
      {
        type: 'Passes accurate',
        value: 375,
      },
      {
        type: 'Passes %',
        value: '83%',
      },
      {
        type: 'expected_goals',
        value: '1.49',
      },
    ],
  },
  {
    team: {
      id: 49,
      name: 'Chelsea',
      logo: 'https://media-3.api-sports.io/football/teams/49.png',
    },
    statistics: [
      {
        type: 'Shots on Goal',
        value: 8,
      },
      {
        type: 'Shots off Goal',
        value: 7,
      },
      {
        type: 'Total Shots',
        value: 21,
      },
      {
        type: 'Blocked Shots',
        value: 6,
      },
      {
        type: 'Shots insidebox',
        value: 15,
      },
      {
        type: 'Shots outsidebox',
        value: 6,
      },
      {
        type: 'Fouls',
        value: 12,
      },
      {
        type: 'Corner Kicks',
        value: 10,
      },
      {
        type: 'Offsides',
        value: 3,
      },
      {
        type: 'Ball Possession',
        value: '52%',
      },
      {
        type: 'Yellow Cards',
        value: 4,
      },
      {
        type: 'Red Cards',
        value: null,
      },
      {
        type: 'Goalkeeper Saves',
        value: 1,
      },
      {
        type: 'Total passes',
        value: 480,
      },
      {
        type: 'Passes accurate',
        value: 415,
      },
      {
        type: 'Passes %',
        value: '86%',
      },
      {
        type: 'expected_goals',
        value: '2.20',
      },
    ],
  },
]
