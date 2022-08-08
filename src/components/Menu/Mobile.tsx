import { HomeIcon, UsersIcon, MenuIcon } from '@heroicons/react/outline'
import dynamic from 'next/dynamic'
import Link from 'next/link'


const Button = dynamic(() => import('@/components/Button').then((mod) => mod.ButtonMobile), {ssr: false})
const ButtonTheme = dynamic(() => import('@/components/ButtonTheme').then((mod) => mod.ButtonThemeMobile), {ssr: false})

export default function Mobile() {
	return (
		<>
		 	<ul className="flex justify-between items-center block shadow-lg md:hidden fixed bottom-0 left-0 px-5 border-t border-gray-200 dark:border-gray-600 bg-white dark:bg-slate-600 w-full text-black min-h-[50px]">
				<li className="w-full text-center">
					<Button/>
				</li>
				<li className="w-full text-center">
					<Link href="/">
					<a className="inline-flex flex-col justify-center items-center px-3 h-full p-2 rounded-full bg-gray-900">
						<HomeIcon className="w-6 h-6 text-white dark:text-white"/> <span className="text-xs text-white">Home</span>
					</a>
					</Link>
				</li>
				<li className="w-full text-center">
					<ButtonTheme/>
				</li>
			</ul>
		</>
	)
}