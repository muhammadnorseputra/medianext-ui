
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
	<button className="p-4 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700" onClick={() => toggle()}>
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
			<button className="transition-all duration-800 origin-center p-4 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 hover:rotate-180" onClick={() => toggle()}>
				<PlusIcon className="w-6 h-6 text-gray-400"/>
			</button>
		</motion.div>
	)
}