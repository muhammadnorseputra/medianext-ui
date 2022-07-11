import { HomeIcon, UsersIcon, MenuIcon } from '@heroicons/react/outline'
import dynamic from 'next/dynamic'
import Link from 'next/link'


const Button = dynamic(() => import('@/components/Button').then((mod) => mod.ButtonMobile), {ssr: false})
const ButtonTheme = dynamic(() => import('@/components/ButtonTheme').then((mod) => mod.ButtonThemeMobile), {ssr: false})

export default function Mobile() {
	return (
		<>
		 	<ul className="flex justify-between items-center block shadow md:hidden fixed bottom-0 left-0 px-5 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-600 w-full text-black min-h-[50px]">
				<li className="w-full text-center">
					<Link href="/">
					<a className="inline-flex flex-col justify-center items-center px-3 h-full p-2 rounded-full">
						<HomeIcon className="w-6 h-6 text-gray-600 dark:text-white"/> <span className="text-xs text-gray-400">Home</span>
					</a>
					</Link>
				</li>
				<li className="w-full text-center">
					<Button/>
				</li>
				<li className="w-full text-center">
					<ButtonTheme/>
				</li>
				<li className="w-full text-center">
					<Link href="/about">
					<a className="inline-flex flex-col justify-center items-center px-3 h-full p-2 rounded-full">
						<UsersIcon className="w-6 h-6 text-gray-600 dark:text-white"/> <span className="text-xs text-gray-400">About</span>
					</a>
					</Link>
				</li>
			</ul>
		</>
	)
}