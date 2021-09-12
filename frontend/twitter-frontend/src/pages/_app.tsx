import type { AppProps } from 'next/app'
import './globals.css'
import Aside from '../templates/aside'
import HeaderNav from '../templates/header-nav'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className={'h-screen w-screen'}>
      <div className={'w-full h-full flex flex-col-reverse xs:flex-row'}>
        <header
          className={'flex flex-col-reverse xs:flex-grow-[0.5] xs:flex-row-reverse xs:flex-auto'}>
          <HeaderNav />
        </header>
        <main
          className={
            'border h-full w-full flex-auto max-w-[37.5rem]'
          }>
          <Component {...pageProps} />
        </main>
        <aside className={'flex-auto border hidden lg:block'}>
          <Aside />
        </aside>
      </div>
    </div>
  )
}
export default MyApp
