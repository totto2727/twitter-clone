import { FaTwitter } from 'react-icons/fa'
import { FiHash } from 'react-icons/fi'
import { HiOutlineUser } from 'react-icons/hi'
import Presenter from './Presenter'
import { HeaderNavLiProps } from './header-nav-li/Presenter'

const links: HeaderNavLiProps[] = [
  {
    url: '/home',
    Icon: FaTwitter,
    iconProps: { size: 28 },
    current: true,
  },
  {
    url: '/trend',
    text: 'トレンド',
    Icon: FiHash,
  },
  {
    url: '/profile',
    text: 'プロフィール',
    Icon: HiOutlineUser,
  },
]

const HeaderNav = () => {
  return <Presenter links={links} />
}

export default HeaderNav
