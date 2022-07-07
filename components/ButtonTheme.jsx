import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'

function ButtonTheme() {
  const { theme, setTheme } = useTheme()
	return (
		<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-4 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700">{theme === 'light' ? <MoonIcon className="w-6 text-blue-400"/> : <SunIcon className="w-6 text-amber-400"/> }
		</button>
	)
}

export default ButtonTheme