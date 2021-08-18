import { FaTwitter, FaUser } from 'react-icons/fa'
import HeaderNavLi from '../../molecules/header-nav-li/index'

export type Props = {

}

const Presenter = ({  }: Props) => {
  return (
    <header className={'flex-none w-full xs:w-16 md:w-20 xl:w-64'}>
      <nav>
        <ul
          className={
            'flex flex-row items-center justify-between xs:flex-col xs:justify-start'
          }>
          <HeaderNavLi
            url='/home'
            Icon={FaTwitter}
            iconProps={{ title: 'Home', size: '28px' }}
            className='flex-1 w-full'
          />
          <HeaderNavLi
            url='/profile'
            text='プロフィール'
            Icon={FaUser}
            iconProps={{ title: 'Profile' }}
            className='flex-1 w-full'
          />
        </ul>
      </nav>
    </header>
  )
}

export default Presenter
