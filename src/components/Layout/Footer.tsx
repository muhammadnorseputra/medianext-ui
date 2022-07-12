import { ChevronUpIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'
import { useCallback } from 'react'
export default function Footer() {
	const handleTop = useCallback(() => {
		const el = document.getElementsByTagName('main');
        return el[0].scrollTo({ top: 0, behavior: 'smooth' })
	}, [])
	return (
		<>
			<div className="inline-flex flex-1 w-full justify-between items-center py-5 border-t border-gray-200 dark:border-gray-700 [&>*]:text-gray-400 dark:[&>*]:text-gray-400">
				<div className="inline-flex gap-x-2 overflow-auto overflow-y-hidden"><HeartIcon className="w-5 h-5 text-red-800 animate-pulse"/>  2022 Medianext-UI</div>
				<button type="button" onClick={handleTop} className="inline-flex items-center justify-between space-x-3 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full group">
					<span>Top</span> <span><ChevronUpIcon className="w-8 h-8 text-gray-400 bg-gray-200 dark:bg-slate-700 p-2 rounded-full group-hover:animate-pulse"/></span>
				</button>
			</div>
		</>
	)
}