import { FolderIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { SinggleMenu, SinggleMenuItem } from '@/components/Menu/SinggleMenu'
import { TsDropdown, TsDropdownItem, TsDropdownList } from '@/utils/Interface'

export const Dropdown = ({ devider, children }: TsDropdown) => {
	return (
		<>
			{/* Dropdown Menu Items */}
      <ul className={`${devider ? 'br' : '' } gap-y-3 relative dark:[&>li>button]:text-slate-200 hover:[&>li>button]:bg-gray-100 dark:hover:[&>li>button]:bg-slate-700`}>
        { children }
      </ul>
		</>
	)
}

export const DropdownItem = ({ title, children, expand }: TsDropdownItem) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isExpand = !expand ? 'w-full rounded-xl' : 'rounded-full';

  return (
    <>
      {/* Dropdown Items */}
      <li>
        <button type="button" onClick={toggleDropdown} className={`inline-flex justify-between items-center ${isExpand} p-4 group`}>
          <FolderIcon className="w-6 h-6 text-gray-400"/>
          {!expand ? <div className="flex-1 pl-4 text-left whitespace-nowrap" style={{textAlign: 'left'}}>{title}</div> : '' }
          {!expand ? <span className={`p-2 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-slate-900 ${ dropdownOpen ? 'rotate-180' : 'rotate-0' } transition duration-200`}><ChevronDownIcon className="w-5 h-5 text-gray-400"/></span> : ''}
        </button>
        <ul className={`transition-all duration-800 will-change-auto border-l border-gray-200 dark:border-slate-700 ml-7 pl-3 overflow-y-hidden ${ dropdownOpen ? 'max-h-[800px] opacity-1' : 'max-h-0 opacity-0' } dark:[&>li>a]:text-slate-200 dark:hover:[&>li>a]:bg-slate-700`}>
          { children }
        </ul>
      </li>
    </>
  )
}

export const DropdownList = ({title='Menu Title'}: TsDropdownList) => {
  return <li><a href="#" className="inline-flex block gap-x-3 p-4 hover:bg-gray-100 w-full rounded-xl"><span>{ title }</span></a></li>
}