import Head from 'next/head'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Basic } from '@/components/Notification/Basic'
import nookies from 'nookies'
import CardArticle, { CardArticleFeatured } from '@/components/Posts/CardArticle'

const DynamicContent = dynamic(() => import('@/components/Layout/Content'), {ssr: false})

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Medianext UI</title>
      </Head>
      <DynamicContent>
        <Basic message="We come with the latest version 1.6, get this theme through our official site."/>
        <div className="flex container">
          <div className="">
            <section>
              <div className="w-full py-5">
                <h1 className="text-2xl dark:text-slate-400">Featured</h1>
              </div> 
              <div className="grid drid-rows-4 grid-flow-col gap-8">
                 <CardArticleFeatured/> 
              </div>
            </section>
            <section>
              <div className="w-full py-5">
                <h1 className="text-2xl dark:text-slate-400">My Feed</h1>
              </div> 
              <div className="grid drid-rows-4 grid-flow-col gap-8">
                 <CardArticle/> 
                 <CardArticle/> 
                 <CardArticle/> 
              </div>
            </section>
          </div>
          <div className="max-w-sm p-5">
           <CardArticle/> 
          </div>
        </div>
      </DynamicContent>
    </>
  )
}

export default Home
