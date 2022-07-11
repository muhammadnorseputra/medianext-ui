import Image from 'next/image'
import Shimmer from '@/components/Loading/shimmer'
import toBase64 from '@/utils/tobase64'
import shortenLargeNumber from '@/utils/numberformat'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export const CardArticleFeatured = ({title, cover, react}) => {
	return (
		<article className="relative w-full overflow-hidden shadow rounded-xl border-2 border-gray-300 dark:border-gray-800 group">
      {/* image */}
      <div className="relative overflow-hidden">
      	<Image 
          layout="responsive" 
          objectFit="cover" 
          width="1100" 
          height="500"
          placeholder="blur" 
          blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer(1100, 500))}`}
          className="border-t-slate-400 border-b-slate-600 transition-transform group-hover:scale-105 duration-1000" 
          alt={title} 
          src={cover}/>
      </div>
      {/* title */}
      <div className="p-3 md:py-3 md:px-5 absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-white dark:to-black w-full">
        <Link href="/">
          <a className="text-blue-600 dark:text-white hover:text-blue-800">
            <h1 className="text-xs md:text-md xl:text-xl 2xl:text-2xl md:p-2 md:my-2 before:-skew-x-12 font-bold before:block before:absolute before:-inset-1 before:bg-gray-800/80 relative inline-block"><span className="relative text-white">{title}</span></h1>
          </a>
        </Link>
        <p className="hidden md:block max-w-xl text-black dark:text-white text-sm font-normal md:line-clamp-2">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
        </p>
        <div className="inline-flex items-center justify-between space-x-2 md:space-x-3 py-2 md:py-3 w-full">
          <div className="rounded-full w-[30px] h-[30px] bg-gray-200 overflow-hidden">
            <Image 
              layout="intrinsic" 
              objectFit="cover" 
              width="30" 
              height="30"
              placeholder="blur" 
              blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer(30, 30))}`}
              className="rounded-full" alt="Author Pic" 
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80"/>
          </div>          
          <div className="text-gray-400 flex-1">
            <span className="font-bold text-xs text-gray-800 dark:text-white">M. Nor Seputra</span>
            <br/>
            <span className="text-xs  text-gray-600">{shortenLargeNumber(react.views,1)} Views &bull; {shortenLargeNumber(react.comments,1)} Comments</span>
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
	)
}

export default function CardArticle({title, cover, react}) {
	return (
    <Link href="/">
    <a className="text-black dark:text-white hover:text-blue-600">
		<article className="dark:text-white dark:border-gray-800 rounded-xl border-2 overflow-hidden hover:border-blue-600 shadow dark:shadow-none group h-full flex flex-col justify-between bg-white dark:bg-slate-600">
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
      {/* title */}
      <h1 className="text-sm md:text-sm xl:text-sm 2xl:text-xl  hover:text-blue-600 dark:hover:text-blue-300 font-bold line-clamp-2 m-3 tracking-wide">{title}</h1>
      {/* author */}
      <div className="inline-flex items-start justify-between space-x-5 p-3">
          <div className="rounded-full w-[30px] h-[30px] bg-gray-200 overflow-hidden">
            <Image 
              layout="intrinsic" 
              objectFit="cover" 
              width="30" 
              height="30"
              alt="Author Pic" 
              className="rounded-full"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80"/>
          </div>          
          <div className="text-gray-400 flex-1 text-[10px] xs:text-xs">
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
	)
}

export const CardArticlePopuler = ({title, cover, react}) => {
  return (
    <Link href="/">
    <a className="text-black dark:text-white hover:text-blue-800">
    <article className="dark:text-white overflow-hidden group flex justify-between flex-row-reverse pb-2 border-b dark:border-gray-700 border-gray-200">
      {/* cover */}
      <div className="relative overflow-hidden rounded-xl my-3 max-w-[80px] max-h-[80px]">
      <Image 
          layout="intrinsic" 
          objectFit="cover" 
          width="200" 
          height="200"
          placeholder="blur" 
          blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer(1100, 500))}`}
          className="transition-transform group-hover:opacity-70 duration-1000"
          alt={title} 
          src={cover}/>
      </div>
      <div className="w-full">
        {/* title */}
        <h1 className="text-sm md:text-xs xl:text-xs 2xl:text-xl my-3 mr-3 font-bold tracking-wide line-clamp-2">{title}</h1>
        {/* Author */}
        <div className="inline-flex items-end justify-between w-full space-x-5 pr-3">
          <div className="text-gray-400 text-[10px] xs:text-xs">
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
      </div>
      {/* readmore */}
    </article>    
    </a>
    </Link>
  )
}