import Head from 'next/head'
import Presenter, { Props } from './presenter'

const Profile: React.VFC<void> = () => {
  const props: Props = {
    userId: 1,
  }
  return (
    <>
      <Head>
        <title>user-top</title>
      </Head>
      <Presenter {...props} />
    </>
  )
}

export default Profile