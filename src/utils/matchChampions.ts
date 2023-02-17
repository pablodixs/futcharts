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
    id: number
    name: string
    city: string
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
]
