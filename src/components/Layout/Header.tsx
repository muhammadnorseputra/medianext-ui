
import { XIcon,  SearchIcon, UserIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import shimmer from '@/components/Loading/shimmer'

const Button = dynamic(() => import('@/components/Button'), {ssr: false})
const ButtonTheme = dynamic(() => import('@/components/ButtonTheme'), {ssr: false})

export default function Header() {
	return (
	<header className="flex bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 relative text-gray-800 dark:text-white h-[60px] sticky">
        <div className="inline-flex items-center w-[260px] pl-3">
          <Button/>
          <Link href="/" passHref>
           <span className="overflow-hidden whitespace-nowrap block ml-1 text-gray-700 dark:text-white text-xl cursor-pointer">Medianext UI</span>
          </Link>
        </div>
        <div className="px-6 inline-flex flex-1 items-center justify-between">
          <div>
            <div className="bg-gray-100 dark:bg-slate-700 dark:border-t-slate-400 dark:border-b-slate-600 hidden md:inline-flex items-center justify-between gap-x-2 p-3 rounded-full group">
              {/* Icon Search*/}
              <SearchIcon className="w-5 h-5 text-gray-400"/>
              {/* Search Box*/}
              <input type="text" className="outline-0 ring-0 appearance-none bg-transparent flex-1 w-[320px]" placeholder="Try 'Adventure'"/>
              {/* Close Search */}
              <button className="text-blue-400 p-1.5 rounded-full dark:hover:bg-slate-900"><XIcon className="w-4"/></button>
            </div>
          </div>
          <div className="inline-flex justify-end relative items-center">
            <ButtonTheme/>
            <button className="p-4 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700"><UserIcon className="w-6 text-gray-400"/></button>
          </div>
        </div>
    </header>
	)
}