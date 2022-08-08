import { XIcon,  SearchIcon, UserIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { Suspense, Fragment, useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import shimmer from '@/components/Loading/shimmer'
import { Popover, Transition, Dialog } from '@headlessui/react'
import Image from 'next/image'
import User from 'public/assets/img/user.webp'

const Button = dynamic(() => import('@/components/Button'), {ssr: false})
const ButtonTheme = dynamic(() => import('@/components/ButtonTheme'), {ssr: false})

export default function Header() {
  let [isOpen, setIsOpen] = useState(false)
  const handleSearch = useCallback(() => {
    setIsOpen(true)
  }, [])
	return (
  <>
	<header className="flex bg-white dark:bg-slate-600 border-b border-gray-200 dark:border-slate-700 relative text-gray-800 dark:text-white h-[60px]">
        <div className="inline-flex items-center w-[260px] pl-3">
          <Button/>
          <Link href="/" passHref>
           <span className="overflow-hidden whitespace-nowrap block ml-1 text-gray-700 dark:text-white dark:hover:text-blue-400 text-xl cursor-pointer hover:text-blue-600 ">Medianext UI</span>
          </Link>
        </div>
        <div className="px-6 inline-flex w-full justify-items-stretch items-center justify-between">
          <div className="justify-self-center">
            <div className="bg-gray-100 dark:bg-slate-700 dark:border-t-slate-400 dark:border-b-slate-600 hidden md:inline-flex items-center justify-between gap-x-2 p-2 rounded-full group">
              {/* Icon Search*/}
              <SearchIcon className="w-5 h-5 text-gray-400"/>
              {/* Search Box*/}
              <input type="text" className="outline-0 ring-0 appearance-none bg-transparent flex-1 w-[320px]" placeholder="Try 'Adventure'"/>
              {/* Close Search */}
              <button className="text-blue-400 p-1.5 rounded-full dark:hover:bg-slate-900"><XIcon className="w-4"/></button>
            </div>
          </div>
          <div className="inline-flex justify-end relative items-center">
            <button type="button" role="button" onClick={() => handleSearch()} className="p-2 2xl:p-4 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 block md:hidden"><SearchIcon className="w-5 h-5 text-gray-400"/></button>
            <ButtonTheme/>
            <Popover className="relative">
              <Popover.Button type="button" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700"><UserIcon className="w-6 text-gray-400"/></Popover.Button>
              <Transition
                as={Fragment}
                enter="transition duration-500"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-0"
              >
              <Popover.Panel className="absolute z-10 right-0 origin-top-right top-12 md:top-14 lg:top-14 p-3 bg-white dark:bg-slate-700 rounded-lg shadow w-[280px]">
                <div className="flex flex-col gap-y-5 p-5 text-black dark:text-gray-200">
                    <Image layout="fixed" width="100" height="100" src={User} className="mx-auto inline-block"/>
                    <h2 className="text-xl">
                      Sign up or log in to your Median account.
                    </h2>
                    <p>
                      Takes less than a few seconds.
                    </p>
                    <div className="inline-flex justify-around items-center space-x-3">
                      <Link href="/sign-up" passHref><button type="button" className="w-full py-2 px-4 rounded-full bg-blue-600 text-white hover:shadow-xl dark:hover:bg-gray-800">Sign Up</button></Link>
                      <Link href="/login" passHref><button type="button" className="w-full py-2 px-4 rounded-full font-bold border border-blue-600 text-blue-600 hover:shadow-xl">Login</button></Link>
                  </div>
                </div>
              </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        </div>
    </header>
    <SearchDialog opened={isOpen} setIsOpen={setIsOpen}/>
   </>
	)
}

export const SearchDialog = ({opened, setIsOpen}) => {

  return (
    <Transition
      as={Fragment}
      show={opened}
    >
    <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-white/70 dark:bg-black/70 backdrop-blur" aria-hidden="true" />
      </Transition.Child>

      <Transition.Child
      as={Fragment}
      enter="transition duration-500"
      enterFrom="-translate-y-full"
      enterTo="translate-y-0"
      leave="transition duration-300"
      leaveFrom="translate-y-0"
      leaveTo="-translate-y-full"
      >
      <div className="fixed top-0 p-4 bg-white dark:bg-slate-700 w-full rounded-b-2xl border-b-gray-300 shadow-2xl">
      <Dialog.Panel>
        <div className="flex items-center justify-start space-x-3 divide-x divide-gray-200 dark:divide-slate-600">
          <div>
            <SearchIcon className="w-5 h-5 text-gray-400"/>
          </div>
          <div className="flex-1">
            <input type="text" className="outline-0 ring-0 border-0 appearance-none bg-white dark:bg-slate-700 w-full py-2 px-3 placeholder-gray-400" placeholder="Try 'Adventure'"/>
          </div>
        </div>
      </Dialog.Panel>
      </div>
      </Transition.Child>
    </Dialog>
    </Transition>
  )
}