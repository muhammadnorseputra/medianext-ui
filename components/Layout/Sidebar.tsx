import { useRecoilState } from 'recoil'
import { sideNavIs } from 'store'
import { motion } from "framer-motion"
import { XIcon, MenuIcon, SearchIcon, UserIcon, UsersIcon, ChatAltIcon, MoonIcon, ChevronDownIcon, MenuAlt1Icon, PlusIcon, NewspaperIcon } from '@heroicons/react/outline'
import { FbIcon, FigmaIcon, GithubIcon, IgIcon, TwitchIcon, TwitterIcon } from '@/components/Icons'
import { Dropdown, DropdownItem, DropdownList } from '@/components/Menu/Dropdown'
import { SinggleMenu, SinggleMenuItem } from '@/components/Menu/SinggleMenu'

export default function Sidebar() {
    const [isExpand, setIsExpand] = useRecoilState(sideNavIs);

    const toggle = () => {
        setIsExpand(!isExpand);
    };
    const expanWidthSidebar = !isExpand ? 'w-[260px]' : 'w-[70px]';

    return (
        <div className={`${expanWidthSidebar} hidden transition-all duration-800 will-change-auto origin-left md:inline-flex flex-col justify-between border-r border-gray-200 sticky top-0 overflow-x-hidden`}>
          <div className="overflow-y-auto overflow-x-hidden px-3 py-5">
            {/* Dropdown Menu */}
            <SinggleMenu devider>
              <SinggleMenuItem title="My Feeds" icon={<NewspaperIcon className="w-6 h-6 text-blue-400 stroke-2"/>} expand={isExpand}/>
            </SinggleMenu>
            <Dropdown devider>
              <DropdownItem title="Internet" expand={isExpand}>
                <DropdownList title="Adsense"/>
                <DropdownList title="Blogger"/>
                <DropdownList title="Tips SEO"/>
                <DropdownList title="Android"/>
              </DropdownItem>
              <DropdownItem title="Proggramer" expand={isExpand}>
                <DropdownList title="HTML5"/>
                <DropdownList title="Css"/>
                <DropdownList title="Javascript"/>
                <DropdownList title="Vue Js"/>
                <DropdownList title="React JS"/>
              </DropdownItem>
            </Dropdown>
            {/* Basic Menu Items */}
            <SinggleMenu>
              <SinggleMenuItem title="About" icon={<UsersIcon className="w-6 h-6 text-gray-400"/>} expand={isExpand}/>
              <SinggleMenuItem title="Contact" icon={<ChatAltIcon className="w-6 h-6 text-gray-400"/>} expand={isExpand}/>
            </SinggleMenu>
          </div>
          {/* Sidebar Footer */}
          <div className={`inline-flex flex-col gap-y-3 ${isExpand ? 'h-[70px] p-3' : 'h-[100px] p-5'} border-t border-gray-200`}>
            {!isExpand ?  
            (<><ul className="inline-flex items-center justify-around">
              <li><a href="#" className="hover:underline">Sitemap</a></li>
              &bull;
              <li><a href="#" className="hover:underline">Disclaimer</a></li>
              &bull;
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
            <ul className="inline-flex items-center justify-around">
              <li className="p-2 rounded-full hover:bg-gray-100"><a href="#"><FbIcon/></a></li>
              <li className="p-2 rounded-full hover:bg-gray-100"><a href="#"><FigmaIcon/></a></li>
              <li className="p-2 rounded-full hover:bg-gray-100"><a href="#"><GithubIcon/></a></li>
              <li className="p-2 rounded-full hover:bg-gray-100"><a href="#"><IgIcon/></a></li>
              <li className="p-2 rounded-full hover:bg-gray-100"><a href="#"><TwitchIcon/></a></li>
              <li className="p-2 rounded-full hover:bg-gray-100"><a href="#"><TwitterIcon/></a></li>
            </ul></>)
            : 
            <motion.div initial={{scale: 0}} animate={{scale: 1}}><button className="transition-all duration-800 p-4 rounded-full hover:bg-gray-200 hover:rotate-180" onClick={() => toggle()}><PlusIcon className="w-6 h-6 text-gray-400"/></button></motion.div>
            } 
          </div>
        </div>
    )
}