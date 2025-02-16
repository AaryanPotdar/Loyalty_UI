import Head from 'next/head'
import HomeScreen from './components/home-screen'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nom Station</title>
      </Head>
      <HomeScreen />
    </>
  )
}