
import { useAtom } from 'jotai'
import { sideNavToggle } from 'store'
import { MenuIcon, MenuAlt1Icon, PlusIcon } from '@heroicons/react/outline'
import { motion } from "framer-motion"

export default function Button() {
	const [isExpand, setIsExpand] = useAtom(sideNavToggle);
	const toggle = () => {
	    setIsExpand(!isExpand);
	};
	return (
	<button type="button" className="p-4 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 hidden md:block" onClick={() => toggle()}>
          {
            !isExpand ? 
            <MenuIcon className="w-6 h-6 text-gray-400"/> 
            :
            <MenuAlt1Icon className="w-6 h-6 text-gray-400"/>
          }
    </button>
	)
}

export const ButtonPlus = () => {
	const [isExpand, setIsExpand] = useAtom(sideNavToggle);
	const toggle = () => {
	    setIsExpand(!isExpand);
	};
	return (
		<motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
			<button type="button" className="hidden md:block transition-all duration-800 origin-center p-4 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 hover:rotate-180" onClick={() => toggle()}>
				<PlusIcon className="w-6 h-6 text-gray-400"/>
			</button>
		</motion.div>
	)
}

export const ButtonMobile = () => {
	const [isExpand, setIsExpand] = useAtom(sideNavToggle);
	const toggle = () => {
	    setIsExpand(!isExpand);
	};
	return (
		<button type="button" onClick={() => toggle()} className="inline-flex flex-col justify-center items-center px-3 h-full p-2 rounded-full [&>*]:font-bold">
			{
        !isExpand ? 
        <MenuIcon className="w-7 h-7 text-gray-600 dark:text-white"/> 
        :
        <MenuAlt1Icon className="w-7 h-7 text-gray-600 dark:text-white"/>
      }
      <span className="text-sm text-gray-400">Menu</span>
		</button>
	)
}