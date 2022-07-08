import Image from 'next/image'
import Shimmer from '@/components/Loading/shimmer'
import toBase64 from '@/utils/tobase64'
import Link from 'next/link'

export const CardArticleFeatured = () => {
	return (
		<article className="relative w-full overflow-hidden">
      {/* image */}
      <div className="relative">
      	<Image 
          layout="intrinsic" 
          objectFit="cover" 
          width="1100" 
          height="500"
          placeholder="blur" 
          blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer(1100, 500))}`}
          className="border-t-slate-400 border-b-slate-600 transition-transform hover:scale-105" alt="article 1" 
          src="https://images.unsplash.com/photo-1657222738849-6b85de98ff4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
      </div>
      {/* title */}
      <div className="p-3 md:py-3 md:px-5 absolute bottom-1.5 left-0 backdrop-blur-lg bg-white/30 w-full">
        <Link href="/">
          <a className="text-blue-600 hover:text-blue-500">
            <h1 className="text-lg md:text-2xl md:pb-4 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing,</h1>
          </a>
        </Link>
        <p className="hidden md:block max-w-3xl text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nihil officiis totam molestias maxime accusantium ea enim.
        </p>
        <div className="inline-flex items-center space-x-5 py-3">
          <div>
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
          <div className="text-gray-400">
            <span className="font-bold">M. Nor Seputra</span>
            <br/>
            <span className="text-xs">30k Views &bull; 6 Comments</span>
          </div>
        </div>
      </div>
      {/* readmore */}
    </article> 
	)
}

export default function CardArticle() {
	return (
		<article className="dark:text-white">
      {/* image */}
      <div className="relative">
      <Image 
          layout="intrinsic" 
          objectFit="cover" 
          width="600" 
          height="400"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer(600, 400))}`} 
          className=" border-t-slate-400 border-b-slate-600 transition-transform hover:scale-105" alt="article 1" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"/>
      </div>
      {/* title */}
      <h1 className="text-2xl py-3">Title Here...</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nihil officiis totam molestias maxime accusantium ea enim quo reprehenderit quae blanditiis.</p>
      <div className="inline-flex items-center space-x-5 py-3">
          <div>
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
          <div className="text-gray-400">
            <span className="font-bold">M. Nor Seputra</span>
            <br/>
            <span className="text-xs">30k Views &bull; 6 Comments</span>
          </div>
        </div>
      {/* readmore */}

    </article>    
	)
}
