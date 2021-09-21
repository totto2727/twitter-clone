import type { AppProps } from 'next/app'
import './globals.css'
import Aside from '../templates/aside'
import HeaderNav from '../templates/header-nav'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className={'h-screen w-screen'}>
      <div className={'w-full h-full flex flex-col-reverse items-center xs:flex-row xs:items-start'}>
        <header
          className={'w-full xs:w-auto xs:h-full flex flex-col xs:flex-grow-[0.5] xs:flex-row-reverse xs:flex-auto border'}>
          <HeaderNav />
        </header>
        <main
          className={
            'border h-full w-full p-0 m-0 max-w-[37.5rem]'
          }>
          <Component {...pageProps}>

          </Component>
        </main>
        <aside className={'flex-auto border hidden lg:block'}>
          <Aside />
        </aside>
      </div>
    </div>
  )
}
export default MyApp
