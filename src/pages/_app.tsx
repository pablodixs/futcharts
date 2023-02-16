import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { globalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'

globalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}
