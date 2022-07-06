import { useState } from 'react'
import { XIcon, MenuIcon, SearchIcon, UserIcon, MoonIcon, MenuAlt1Icon } from '@heroicons/react/outline'
import { useRecoilState } from 'recoil'
import { sideNavIs } from 'store'

export default function Header() {
	const [isExpand, setIsExpand] = useRecoilState(sideNavIs);
	  const toggle = () => {
	    setIsExpand(!isExpand);
	  };
	return (
	<header className="flex bg-white border-b border-gray-200 relative text-gray-800 h-[60px] sticky">
        <div className="inline-flex items-center w-[260px] pl-3">
          <button className="p-4 rounded-full hover:bg-gray-100" onClick={() => toggle()}>
            
              {
                !isExpand ? 
                <MenuIcon className="w-6 h-6 text-gray-400"/> 
                :
                <MenuAlt1Icon className="w-6 h-6 text-gray-400"/>
              }
            
          </button> 
           <span className="overflow-hidden whitespace-nowrap block ml-1 text-gray-700 text-xl">Medianext UI</span>
        </div>
        <div className="px-6 inline-flex flex-1 items-center justify-between">
          <div>
            <div className="bg-gray-100 hidden md:inline-flex items-center justify-between gap-x-2 p-3 rounded-xl group">
              {/* Icon Search*/}
              <SearchIcon className="w-5 h-5 text-gray-400"/>
              {/* Search Box*/}
              <input type="text" className="outline-0 ring-0 appearance-none bg-transparent flex-1 w-[320px]" placeholder="Try 'Adventure'"/>
              {/* Close Search */}
              <button className="text-blue-400"><XIcon className="w-4"/></button>
            </div>
          </div>
          <div className="inline-flex justify-end relative items-center">
            <button className="p-4 rounded-full hover:bg-gray-100"><MoonIcon className="w-6 text-gray-400"/></button>
            <button className="p-4 rounded-full hover:bg-gray-100"><UserIcon className="w-6 text-gray-400"/></button>
          </div>
        </div>
    </header>
	)
}