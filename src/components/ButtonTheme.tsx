import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'

function ButtonTheme() {
  const { theme, setTheme } = useTheme()
	return (
		<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-4 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 hidden md:block">{theme === 'light' ? <MoonIcon className="w-6 text-blue-400"/> : <SunIcon className="w-6 text-amber-400"/> }
		</button>
	)
}

export const ButtonThemeMobile = () => {
  const { theme, setTheme } = useTheme()
	return (
		<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="inline-flex flex-col justify-center items-center px-3 h-full p-2 rounded-full [&>*]:font-bold">{theme === 'light' ? <MoonIcon className="w-7 h-7 text-blue-400"/> : <SunIcon className="w-7 h-7 text-amber-400"/> }
		<span className="text-sm text-gray-400">{theme === "dark"? 'Light' : 'Dark'}</span>
		</button>

	)
}

export default ButtonTheme