import { leagues } from '@/utils/leagues'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function League() {
  const router = useRouter()
  const { id } = router.query

  const leagueExists = leagues.find((league) => league.slug === id)

  return (
    <>
      <Head>
        <title>{leagueExists?.title} - Futcharts</title>
      </Head>
      <h1>{leagueExists?.title}</h1>
    </>
  )
}
