import Image from 'next/image'
import Shimmer from '@/components/Loading/shimmer'
import toBase64 from '@/utils/tobase64'
import shortenLargeNumber from '@/utils/numberformat'
import { DotsVerticalIcon, ExclamationCircleIcon, BookmarkAltIcon, ShareIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useState } from 'react';
import { ButtonOption as MenuOption } from '@/components/ButtonOption'
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const CardArticleFeatured = ({title, cover, react}) => {
  
  const [isLoading, setLoading] = useState(true);

	return (
    <>
		<article className="relative w-full bg-white shadow group xl:inline-flex xl:flex-row-reverse rounded-xl">
      {/* image */}
      <div className="relative aspect-video">
        <Link href="/singgle-post">
        	<Image 
            layout="fill" 
            objectFit="cover"
            className={cn(
            'bg-gradient-to-t cursor-pointer from-gray-200 dark:from-gray-900 border-t-slate-400 border-b-slate-600 transition-transform group-hover:opacity-70 duration-800',
              isLoading
                ? 'grayscale blur-2xl scale-110'
                : 'grayscale-0 blur-0 scale-100'
            )}
            onLoadingComplete={() => setLoading(false)}
            alt={title} 
            src={cover}/>
        </Link>
      </div>
      {/* title */}
      <div className="p-3 md:py-2 md:px-5 xl:pb-9 dark:bg-gray-900">
        <Link href="/singgle-post">
          <a className="text-blue-600 dark:text-white hover:text-blue-800">
            <h1 className="text-sm md:text-md xl:text-xl 2xl:text-2xl md:py-2 md:my-2 font-bold"><span>{title}</span></h1>
          </a>
        </Link>
        <p className="hidden md:block max-w-xl text-black dark:text-white text-sm font-normal md:line-clamp-2">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
        </p>
        <div className="inline-flex items-center justify-between space-x-2 md:space-x-3 py-2 md:py-3 w-full">
          <div className="rounded-full w-[25px] h-[25px] bg-gray-200 overflow-hidden">
            <Image 
              layout="intrinsic" 
              objectFit="cover" 
              width="25" 
              height="25"
              className="rounded-full" alt="Author Pic" 
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80"/>
          </div>          
          <div className="text-gray-400 flex-1">
            <span className="font-bold text-xs text-gray-800 dark:text-white">M. Nor Seputra</span>
            <br/>
            <span className="text-xs text-gray-400">{shortenLargeNumber(react.views,1)} Views &bull; {shortenLargeNumber(react.comments,1)} Comments</span>
          </div>
          <MenuOption />
        </div>
      </div>
      {/* readmore */}
    </article> 
    </>
	)
}

export default function CardArticle({title, cover, react}) {
  
	return (
    <>
    <Link href="/singgle-post">
    <a className="text-black dark:text-white hover:text-blue-600">
		<article className="dark:text-white rounded-xl overflow-hidden shadow dark:shadow-none group h-full flex flex-col justify-between bg-white dark:bg-slate-600">
      {/* cover */}
      <div className="relative">
      <Image 
          layout="responsive" 
          objectFit="cover" 
          width="500" 
          height="250"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer(600, 400))}`} 
          className="transition-transform duration-1000 group-hover:opacity-70" 
          alt={title} 
          src={cover}/>
      </div>
      <div className="mt-3 mx-3 text-xs text-gray-600">July 28 &bull; <span className="px-3 py-1 bg-gray-200 text-gray-600 hover:text-gray-800 rounded-full">Olahraga</span></div>
      {/* title */}
      <h1 className="text-sm md:text-sm xl:text-sm 2xl:text-xl  hover:text-blue-600 dark:hover:text-blue-300 font-bold line-clamp-2 m-3 tracking-wide">{title}</h1>
      {/* author */}
      <div className="inline-flex items-start justify-between space-x-5 p-3">
          <div className="rounded-full w-[25px] h-[25px] bg-gray-200 overflow-hidden">
            <Image 
              layout="intrinsic" 
              objectFit="cover" 
              width="25" 
              height="25"
              alt="Author Pic" 
              className="rounded-full"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80"/>
          </div>          
          <div className="text-gray-600 flex-1 text-[10px] xs:text-xs">
            <span>M. Nor Seputra</span>
            <br/>
            <span>{shortenLargeNumber(react.views,1)} Views &bull; {shortenLargeNumber(react.comments,1)} Comments</span>
          </div>
          <div>
            <button type="button" className="transition-color duration-600 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"> 
              <DotsVerticalIcon className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      {/* readmore */}
    </article>    
    </a>
    </Link>
    </>
	)
}

export const CardArticlePopuler = ({title, cover, react}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Link href="/singgle-post">
    <a className="text-black dark:text-white hover:text-blue-800">
    <article className="dark:text-white overflow-hidden group flex justify-between flex-row-reverse my-4">
      {/* cover */}
      <div className="relative overflow-hidden rounded-xl my-3 max-w-[80px] max-h-[80px] md:max-w-[100px] md:max-h-[100px] lg:max-w-[90px] lg:max-h-[90px]">
      <Image 
          layout="intrinsic" 
          objectFit="cover" 
          width="200" 
          height="200"
          className={cn(
            'bg-gradient-to-t from-gray-200 dark:from-gray-900 transition-transform ease-in-out duration-1000 group-hover:opacity-70',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
          alt={title} 
          src={cover}/>
      </div>
      <div className="w-full">
        {/* Author */}
        <div className="inline-flex items-center justify-start w-full space-x-2 pr-3">
          <div className="rounded-full w-[20px] h-[20px] bg-gray-200 overflow-hidden">
            <Image 
              layout="intrinsic" 
              objectFit="cover" 
              width="20" 
              height="20"
              alt="Author Pic" 
              className="rounded-full"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80"/>
          </div> 
          <div className="text-gray-400 text-[10px] text-xs flex-1">
            <span>M. Nor Seputra</span> 
            <span className="px-3 py-1 ml-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full hover:text-gray-800">Olahraga</span>
          </div>
        </div>
        {/* title */}
        <h1 className="text-sm md:text-lg lg:text-sm xl:text-sm 2xl:text-xl mb-2 mr-3 font-bold tracking-wide line-clamp-2">{title}</h1>
        {/*option */}
        <div className="inline-flex items-center justify-between w-full text-xs text-gray-600 dark:text-gray-400">
          <div>
            July 28 &bull; {shortenLargeNumber(react.views,1)} Views &bull;  {shortenLargeNumber(react.comments,1)} Comments
          </div> 
          <div>
            <button type="button" className="transition-color duration-600 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"> 
              <DotsVerticalIcon className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>      
      </div>
      {/* readmore */}
    </article>    
    </a>
    </Link>
  )
}

export const CardArticleLikeMedium = ({title, cover, summary, react}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Link href="/singgle-post">
    <a className="text-black dark:text-white hover:text-blue-800">
    <article className="dark:text-white overflow-hidden group flex justify-between flex-row-reverse pt-5 pb-3">
      {/* cover */}
      <div className="relative overflow-hidden rounded-xl max-w-[90px] max-h-[90px] sm:max-w-[110px] sm:max-h-[110px] md:max-w-[150px] md:max-h-[150px] 2xl:max-w-[160px] 2xl:max-h-[160px]">
      <Image 
          layout="intrinsic" 
          objectFit="cover"
          width="400"
          height="400" 
          className={cn(
            'bg-gradient-to-t from-gray-200 dark:from-gray-900 transition-colors ease-in-out duration-1000 group-hover:opacity-60 max-w-[400px] max-h-[400px]',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
          alt={title} 
          src={cover}/>
      </div>
      <div className="w-full flex flex-col justify-between">
        {/* Author */}
        <div className="inline-flex items-center justify-start w-full space-x-2 pr-3">
          <div className="rounded-full w-[20px] h-[20px] bg-gray-200 overflow-hidden">
            <Image 
              layout="intrinsic" 
              objectFit="cover" 
              width="20" 
              height="20"
              alt="Author Pic" 
              className="rounded-full"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80"/>
          </div> 
          <div className="text-gray-600 dark:text-gray-300 text-[10px] text-base flex-1">
            <span>M. Nor Seputra</span> 
            <span className="px-3 py-1 ml-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full hover:text-gray-800">Olahraga</span>
          </div>
        </div>
        {/* title */}
        <h1 className="text-sm md:text-xl xl:text-xl 2xl:text-xl mb-2 mr-3 font-bold tracking-wide line-clamp-2">{title}</h1>
        {/* Summary */}
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 pr-5 line-clamp-2 md:line-clamp-3">
          {summary}
        </p>
        {/*option */}
        <div className="inline-flex items-center justify-between w-full text-xs text-gray-600 dark:text-gray-400">
          <div>
            July 28 &bull; {shortenLargeNumber(react.views,1)} Views &bull;  {shortenLargeNumber(react.comments,1)} Comments
          </div> 
          <div>
            <button type="button" className="transition-color duration-600 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full mr-3"> 
              <DotsVerticalIcon className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>      
      </div>
      {/* readmore */}
    </article>    
    </a>
    </Link>
  )
}

