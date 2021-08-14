import Head from 'next/head'
import Presenter from './presenter'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Generated by create next app' />
        <title>Twitter-clone</title>
      </Head>
      <Presenter />
    </>
  )
}

export default Home