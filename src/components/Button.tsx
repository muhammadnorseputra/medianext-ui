
import { useAtom } from 'jotai'
import { sideNavToggle } from 'store'
import { MenuIcon, MenuAlt1Icon, XIcon, PlusIcon } from '@heroicons/react/outline'
import { motion } from "framer-motion"

export default function Button() {
	const [isExpand, setIsExpand] = useAtom(sideNavToggle);
	const toggle = () => {
	    setIsExpand(!isExpand);
	};
	return (
	<button type="button" className="p-2 2xl:p-4 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700" onClick={toggle}>
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
			<button type="button" className="hidden md:block transition-all duration-800 origin-center p-2 2xl:p-4 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 hover:rotate-180" onClick={() => toggle()}>
				<PlusIcon className="w-5 h-5 text-gray-400"/>
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
		<button type="button" onClick={() => toggle()} className="inline-flex flex-col justify-center items-center px-3 h-full py-2 rounded-full">
			{
        isExpand ? 
        <MenuIcon className="w-6 h-6 text-gray-600 dark:text-white"/> 
        :
        <XIcon className="w-6 h-6 text-gray-600 dark:text-white"/>
      }
      <span className="text-xs text-gray-400">Menu</span>
		</button>
	)
}