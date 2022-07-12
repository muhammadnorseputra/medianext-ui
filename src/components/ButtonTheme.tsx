import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

function ButtonTheme() {
  const { theme, setTheme } = useTheme()
	return (
		<motion.button whileTap={{ rotate: '180deg', transition: { type: "spring", stiffness: 100 } }}  type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 2xl:p-4 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 hidden md:block">{theme === 'light' ? <MoonIcon className="w-6 text-blue-400"/> : <SunIcon className="w-6 text-amber-400"/> }
		</motion.button>
	)
}

export const ButtonThemeMobile = () => {
  const { theme, setTheme } = useTheme()
	return (
		<button type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="inline-flex flex-col justify-center items-center px-3 h-full p-2 rounded-full">{theme === 'light' ? <motion.span initial={{ rotate: '180deg' }} animate={{ rotate: 0}}><MoonIcon className="w-6 h-6 text-blue-400"/></motion.span> : <motion.span initial={{ rotate: '180deg' }} animate={{ rotate: 0}}><SunIcon className="w-6 h-6 text-amber-400"/></motion.span> }
		<span className="text-xs text-gray-400">{theme === "dark"? 'Light' : 'Dark'}</span>
		</button>

	)
}

export default ButtonTheme