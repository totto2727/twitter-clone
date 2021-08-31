import { FaTwitter, FaUser } from 'react-icons/fa'
import { HeaderNavLiProps } from './header-nav-li/presenter'
import Presenter from './presenter'

const links: HeaderNavLiProps[] = [
  {
    url: '/home',
    Icon: FaTwitter,
    iconProps: {
      title: 'Home',
      size: '30px',
    },
    className: 'hidden xs:block',
  },
  {
    url: '/profile',
    text: 'プロフィール',
    Icon: FaUser,
    iconProps: {
      title: 'Profile',
      fillOpacity: 0,
      stroke: '#d9d9d9',
      strokeWidth: 40,
    },
  },
]

const HeaderNav = () => {
  return <Presenter links={links} />
}

export default HeaderNav
