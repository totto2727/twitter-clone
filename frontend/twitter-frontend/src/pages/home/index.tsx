import Head from 'next/head'
import Presenter from './presenter'

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
