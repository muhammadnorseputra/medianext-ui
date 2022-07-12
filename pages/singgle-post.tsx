import Head from 'next/head'
import type { NextPage } from 'next'
import Content from '@/components/Layout/Content'
import nookies from 'nookies'
import { CardArticlePopuler } from '@/components/Posts/CardArticle'
import posts from 'dummy/posts.json'
import { BookmarkIcon, LinkIcon } from '@heroicons/react/outline'
import { FbIcon, FigmaIcon, GithubIcon, IgIcon, TwitchIcon, TwitterIcon } from '@/components/Icons'
import Image from 'next/image'
import Shimmer from '@/components/Loading/shimmer'
import toBase64 from '@/utils/tobase64'
import shortenLargeNumber from '@/utils/numberformat'
import {useStickyBox} from "react-sticky-box";

const SingglePost: NextPage = () => {
  const { data } = posts 
  const stickyRef = useStickyBox()
  return (
    <>
      <Head>
        <title>Singgle Post - Medianext UI</title>
      </Head>
      <div className="flex flex-col md:flex-row container">
        <div className="my-5 mx-2 md:mx-0 md:px-4 2xl:px-8">
          <div className="sticky top-3">
          <span className="border-b border-gray-200 py-1">Share</span>
          <ul className="flex items-center sm:justify-center flex-row sm:flex-col mt-3 gap-y-4 gap-x-2">
            <li>
              <button className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full text-gray-800 dark:text-slate-100" type="button">
                <FbIcon/>
              </button>
            </li>
            <li>
              <button className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full text-gray-800 dark:text-slate-100" type="button">
                <TwitterIcon/>
              </button>
            </li>
            <li className="!mb-0 md:br">
              <button className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full text-gray-800 dark:text-slate-100" type="button">
                <IgIcon/>
              </button>
            </li>
            <li>
              <button className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full text-gray-800 dark:text-slate-100" type="button">
                <LinkIcon className="w-5 h-5 text-gray-800 dark:text-slate-100"/>
              </button>
            </li>
          </ul>
          </div>
        </div>
        <article className="w-full px-2 md:px-12 md:max-w-4xl 2xl:max-w-6xl md:border-l md:dark:border-gray-700 border-gray-200 bg-white dark:bg-gray-800 pb-8">
          {/* user info */}
          <div className="flex flex-col gap-y-5">
             <div className="inline-flex items-center justify-between space-x-2 md:space-x-3 py-2 md:py-3 w-full mt-2 w-full bg-white dark:bg-gray-800">
                <div className="rounded-full w-[45px] h-[45px] bg-gray-200 overflow-hidden outline outline-offset-2 outline-1">
                  <Image 
                    layout="intrinsic" 
                    objectFit="cover" 
                    width="45" 
                    height="45"
                    placeholder="blur" 
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer(45, 45))}`}
                    className="rounded-full" alt="Author Pic" 
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80"/>
                </div>          
                <div className="text-gray-400 flex-1">
                  <span className="font-bold text-sm text-gray-800 dark:text-white">M. Nor Seputra</span>
                  <br/>
                  <span className="text-sm text-gray-400">July 26 &bull; 5 min read</span>
                </div>
              </div>
              {/* post info*/}
              <h1 className="text-xl md:text-xl xl:text-3xl font-bold">Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC</h1>
              <div className="relative overflow-hidden aspect-video">
                <Image 
                  layout="fill" 
                  objectFit="cover" 
                  width="1200" 
                  height="800"
                  placeholder="blur" 
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer(1200, 800))}`}
                  className="border-t-slate-400 border-b-slate-600 transition-transform group-hover:scale-105 duration-1000" 
                  alt={data[1].title} 
                  src={data[1].cover}/>
              </div>
          </div>
          <div className="prose lg:prose-md 2xl:prose-xl dark:prose-invert">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </article>
        <div className="px-2 md:px-6 2xl:px-8 md:border-l md:border-gray-200 dark:md:border-gray-700">
          <div ref={stickyRef} className="will-change-scroll">
            <div className="w-full py-5">
               <h1 className="text-base font-bold xl:text-xl 2xl:text-2xl dark:text-slate-400 before:rounded-full before:w-2 before:h-full before:bg-blue-600 before:absolute before:-left-5 relative left-5">Trending</h1>
            </div> 
            <div className="grid grid-cols gap-y-3">
             <CardArticlePopuler key={data[3].id} title={data[3].title} cover={data[3].cover} {...data[3]}/>
             <CardArticlePopuler key={data[4].id} title={data[4].title} cover={data[4].cover} {...data[4]}/>
             <CardArticlePopuler key={data[7].id} title={data[7].title} cover={data[7].cover} {...data[7]}/>
             <CardArticlePopuler key={data[9].id} title={data[9].title} cover={data[9].cover} {...data[9]}/>
            </div>
            
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

export default SingglePost
