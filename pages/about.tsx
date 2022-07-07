import Head from 'next/head'
import type { NextPage } from 'next'
import Content from '@/components/Layout/Content'
import nookies from 'nookies'


const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Medianext UI</title>
      </Head>
      <Content>
        <div className="container max-w-2xl bg-white dark:bg-gray-700 h-screen w-full p-5 border-l border-r border-gray-200 dark:border-slate-600">
          <div className="flex">
            <div className="max-w-2xl">
              <h1 className="text-2xl dark:text-white">About</h1>
            </div>            
          </div>
        </div>
      </Content>
    </>
  )
}

export default About
