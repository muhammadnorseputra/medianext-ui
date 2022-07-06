import Head from 'next/head'
import type { NextPage } from 'next'
import Content from '@/components/Layout/Content'
import { Basic } from '@/components/Notification/Basic'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Medianext UI</title>
      </Head>
      <Content>
      <Basic message="We come with the latest version 1.6, get this theme through our official site."/>
        <div className="container bg-red-300">
          <div className="flex">
            dasdasd
          </div>
        </div>
      </Content>
    </>
  )
}

export default Home