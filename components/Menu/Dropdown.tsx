import { FolderIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { SinggleMenu, SinggleMenuItem } from '../../components/Menu/SinggleMenu'


interface Dropdown {
	devider?: Boolean,
	children: any
}

export const Dropdown = ({ devider, children }: Dropdown) => {
	return (
		<>
			{/* Dropdown Menu Items */}
            <ul className={`${devider ? 'br' : '' }`}>
              { children }
            </ul>
		</>
	)
}

interface DropdownItem {
  title: string, 
  children?: any
}

export const DropdownItem = ({ title, children }: DropdownItem) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      {/* Dropdown Items */}
      <li>
        <button type="button" onClick={toggleDropdown} className="inline-flex justify-between items-center w-full px-2 py-3 hover:bg-gray-100 rounded-xl group">
          <FolderIcon className="w-6 h-6 text-gray-400"/>
          <div className="flex-1 pl-5 text-left" style={{textAlign: 'left'}}>{title}</div>
          <span className={`p-2 rounded-full group-hover:bg-blue-100 ${ dropdownOpen ? 'rotate-180' : 'rotate-0' } transition duration-200`}><ChevronDownIcon className="w-5 h-5 text-gray-400"/></span>
        </button>
        <ul className={`border-l border-gray-200 ml-5 pl-3 ${ dropdownOpen ? 'show' : 'hidden' } transition`}>
          { children }
        </ul>
      </li>
    </>
  )
}

interface DropdownList {
  title?: string
}

export const DropdownList = ({title='Menu Title'}: DropdownList) => {
  return <li><a href="#" className="inline-flex block gap-x-3 pl-5 py-4 hover:bg-gray-100 w-full rounded-xl"><span>{ title }</span></a></li>
}