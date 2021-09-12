import { useRouter } from 'next/router'
import Presenter, { HeaderNavLiProps } from './Presenter'

const HeaderNavLi = (props: HeaderNavLiProps) => {
  const router = useRouter()
  const current = props.current || router.asPath === props.url

  return <Presenter {...props} current={current} />
}

export default HeaderNavLi
