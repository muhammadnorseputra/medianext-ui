import Head from 'next/head'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import nookies from 'nookies'
import { CardArticleFeatured, CardArticlePopuler, CardArticleLikeMedium } from '@/components/Posts/CardArticle'
import {Basic as BasicNotif} from '@/components/Notification/Basic'
import { GetServerSideProps } from 'next'
import posts from 'dummy/posts.json'

import { BookmarkIcon } from '@heroicons/react/outline'

const Home: NextPage = () => {
  const { data } = posts 
  return (
    <>
      <Head>
        <title>Medianext UI</title>
      </Head>
        <BasicNotif message="Halo selamat datang di website resmi"/>
        <div className="flex flex-col flex-col-reverse md:flex-row container">
          {/*<div className="px-3">ABC</div>*/}
          <div className="w-full px-2 md:px-6 md:max-w-4xl 2xl:max-w-6xl">
            <section>
              <div className="w-full py-5">
                <h1 className="text-base font-bold xl:text-xl 2xl:text-2xl dark:text-slate-400 before:rounded-full before:w-2 before:h-full before:bg-blue-600 before:absolute before:-left-5 relative left-5">Pick This Week</h1>
              </div> 
              <div className="flex md:grid md:grid-flow-col gap-x-3">
                 {
                   data.map((data, i) => (data.isfeatured ? <CardArticleFeatured key={i} title={data.title} cover={data.cover} {...data}/> : ''))
                 }
              </div>
            </section>
            <section>
              <div className="w-full py-5">
                <h1 className="text-base font-bold xl:text-xl 2xl:text-2xl dark:text-slate-400 before:rounded-full before:w-2 before:h-full before:bg-blue-600 before:absolute before:-left-5 relative left-5">My Feed</h1>
              </div> 
              <div className="grid grid-cols gap-5 pb-3">
                {
                   data.map((data, i) => (!data.isfeatured ? <CardArticleLikeMedium key={i} title={data.title} cover={data.cover} summary={data.summary} {...data}/> : ''))
                }
              </div>
            </section>
          </div>
          <div className="px-2 2xl:px-8">
            <div className="w-full py-5">
               <h1 className="text-base font-bold xl:text-xl 2xl:text-2xl dark:text-slate-400 before:rounded-full before:w-2 before:h-full before:bg-blue-600 before:absolute before:-left-5 relative left-5">Trending</h1>
            </div> 
            <div className="grid grid-cols gap-y-3">
             <CardArticlePopuler key={data[3].id} title={data[3].title} cover={data[3].cover} {...data[3]}/>
             <CardArticlePopuler key={data[4].id} title={data[4].title} cover={data[4].cover} {...data[4]}/>
             <CardArticlePopuler key={data[7].id} title={data[7].title} cover={data[7].cover} {...data[7]}/>
             <CardArticlePopuler key={data[9].id} title={data[9].title} cover={data[9].cover} {...data[9]}/>
            </div>
            <div className="sticky top-0">
              <div className="w-full py-5">
                 <h1 className="text-base font-bold xl:text-xl 2xl:text-2xl dark:text-slate-400 before:rounded-full before:w-2 before:h-full before:bg-blue-600 before:absolute before:-left-5 relative left-5"> Labels</h1>
              </div> 
              <div className="border-b border-gray-200 dark:border-gray-700 pb-5">
                <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                  <li><a href="#" className="bg-gray-300 dark:bg-slate-700 rounded-md text-gray-800 dark:text-white p-2 group flex items-center justify-between group"><span className="flex-1 truncate text-xs 2xl:text-base">Teknologi</span> <span className="mr-1 text-xs 2xl:text-base group-hover:text-blue-400">10</span>  <BookmarkIcon className="w-5 h-5 group-hover:fill-blue-400 text-blue-400"/></a></li>
                  <li><a href="#" className="bg-gray-300 dark:bg-slate-700 rounded-md text-gray-800 dark:text-white p-2 group flex items-center justify-between group"><span className="flex-1 truncate text-xs 2xl:text-base">Blogger</span> <span className="mr-1 text-xs 2xl:text-base group-hover:text-blue-400">6</span>  <BookmarkIcon className="w-5 h-5 group-hover:fill-blue-400 text-blue-400"/></a></li>
                  <li><a href="#" className="bg-gray-300 dark:bg-slate-700 rounded-md text-gray-800 dark:text-white p-2 group flex items-center justify-between group"><span className="flex-1 truncate text-xs 2xl:text-base">Pemerintahan Balangan</span> <span className="mr-1 text-xs 2xl:text-base group-hover:text-blue-400">7</span>  <BookmarkIcon className="w-5 h-5 group-hover:fill-blue-400 text-blue-400"/></a></li>
                  <li><a href="#" className="bg-gray-300 dark:bg-slate-700 rounded-md text-gray-800 dark:text-white p-2 group flex items-center justify-between group"><span className="flex-1 truncate text-xs 2xl:text-base">Balangan</span> <span className="mr-1 text-xs 2xl:text-base group-hover:text-blue-400">3</span>  <BookmarkIcon className="w-5 h-5 group-hover:fill-blue-400 text-blue-400"/></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home
