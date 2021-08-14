import type { AppProps } from 'next/app'
import './globals.css'
import AppHeader from '../components/templates/AppHeader'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
