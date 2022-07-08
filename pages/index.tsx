import Head from 'next/head'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import nookies from 'nookies'
import CardArticle, { CardArticleFeatured } from '@/components/Posts/CardArticle'
import {Basic as BasicNotif} from '@/components/Notification/Basic'

const DynamicContent = dynamic(() => import('@/components/Layout/Content'), {ssr: false})

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Medianext UI</title>
      </Head>
      <DynamicContent>
        <BasicNotif message="Halo selamat datang di website resmi"/>
        <div className="flex flex-col md:flex-row container">
          <div className="">
            <section>
              <div className="w-full py-5">
                <h1 className="text-2xl dark:text-slate-400">Featured</h1>
              </div> 
              <div className="flex md:grid md:grid-flow-col">
                 <CardArticleFeatured/> 
              </div>
            </section>
            <section>
              <div className="w-full py-5">
                <h1 className="text-2xl dark:text-slate-400">My Feed</h1>
              </div> 
              <div className="scroll-smooth snap-x grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 overflow-x-auto overflow-y-hidden pb-3">
                 <CardArticle/> 
                 <CardArticle/> 
                 <CardArticle/> 
                 <CardArticle/> 
              </div>
            </section>
          </div>
          <div className="max-w-sm md:p-5 py-5">
           <CardArticle/> 
          </div>
        </div>
      </DynamicContent>
    </>
  )
}

export default Home
