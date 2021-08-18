import type { AppProps } from 'next/app'
import './globals.css'
import AppAside from '../components/templates/app-aside/index'
import AppHeader from '../components/templates/app-header'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className={'h-screen w-screen'}>
      <div className={'w-full h-full flex flex-col-reverse xs:flex-row '}>
        <div
          className={'flex flex-col-reverse xs:flex-row-reverse xs:flex-auto'}>
          <AppHeader />
        </div>
        <div className={'border-r border-l h-full w-full flex-auto max-w-screen-sm'}>
          <Component {...pageProps} />
        </div>
        <div className={'flex-auto'}>
          <AppAside />
        </div>
      </div>
    </div>
  )
}
export default MyApp
