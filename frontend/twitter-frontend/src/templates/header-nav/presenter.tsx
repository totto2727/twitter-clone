import { FaTwitter, FaUser } from 'react-icons/fa'
import HeaderNavLi from './header-nav-li'
import { HeaderNavLiProps } from './header-nav-li/presenter'

export type Props = {
  links: HeaderNavLiProps[]
}

const Presenter = ({ links }: Props) => {
  return (
    <header>
      <nav className={'md:mx-4 xs:h-full flex-none  xs:w-16 xl:w-64'}>
        <ul
          className={
            'flex flex-row justify-around xs:flex-col xs:justify-start'
          }>
          {links.map((p, i) => (
            <HeaderNavLi {...p} key={i} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Presenter
