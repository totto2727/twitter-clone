import Head from 'next/head'
import Presenter from './Presenter'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Twitter-clone</title>
      </Head>
      <Presenter />
    </>
  )
}

export default Home
