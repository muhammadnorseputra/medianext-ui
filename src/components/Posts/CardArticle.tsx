import Image from 'next/image'
import Shimmer from '@/components/Loading/shimmer'
import toBase64 from '@/utils/tobase64'
import Link from 'next/link'

export const CardArticleFeatured = () => {
	return (
		<article className="relative w-full rounded-lg overflow-hidden shadow">
      {/* image */}
      <div className="relative">
      	<Image 
          layout="intrinsic" 
          objectFit="cover" 
          width="1100" 
          height="500"
          placeholder="blur" 
          blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer(1100, 500))}`}
          className="rounded-lg border-t-slate-400 border-b-slate-600" alt="article 1" 
          src="https://images.unsplash.com/photo-1657222738849-6b85de98ff4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
      </div>
      {/* title */}
      <div className="p-5 absolute bottom-0 left-0 backdrop-blur bg-black/80 w-full text-white">
        <Link href="/">
          <a className="text-blue-300 hover:text-blue-100">
            <h1 className="text-2xl pb-4">Lorem ipsum dolor sit amet consectetur adipisicing,</h1>
          </a>
        </Link>
        <p className="px-5 border-l-2 border-teal-100">
          Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nihil officiis totam molestias maxime accusantium ea enim quo reprehenderit quae blanditiis.
        </p>
          
      </div>
      {/* readmore */}
    </article> 
	)
}

export default function CardArticle() {
	return (
		<article className="dark:text-white">
      {/* image */}
      <div className="relative w-96 h-56 shadow rounded-lg">
      <Image 
          layout="fill" 
          objectFit="cover" 
          width="1024" 
          height="800"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(Shimmer(1024, 800))}`} 
          className="rounded-lg border-t-slate-400 border-b-slate-600" alt="article 1" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"/>
      </div>
      {/* title */}
      <h1 className="text-2xl py-3">Title Here...</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nihil officiis totam molestias maxime accusantium ea enim quo reprehenderit quae blanditiis.</p>
      {/* readmore */}
    </article>    
	)
}
