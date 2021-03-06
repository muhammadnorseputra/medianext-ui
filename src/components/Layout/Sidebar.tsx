import dynamic from 'next/dynamic'
import { useAtom } from 'jotai'
import { sideNavToggle } from 'store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { XIcon, MenuIcon, SearchIcon, UserIcon, UsersIcon, ChatAltIcon, MoonIcon, ChevronDownIcon, MenuAlt1Icon, NewspaperIcon } from '@heroicons/react/outline'
import { FbIcon, FigmaIcon, GithubIcon, IgIcon, TwitchIcon, TwitterIcon } from '@/components/Icons'
import { Dropdown, DropdownItem, DropdownList } from '@/components/Menu/Dropdown'
import { SinggleMenu, SinggleMenuItem } from '@/components/Menu/SinggleMenu'

const ButtonPlus = dynamic(() => import('@/components/Button').then((mod) => mod.ButtonPlus), {ssr: false})

export default function Sidebar() {
    const [isExpand, setIsExpand] = useAtom(sideNavToggle);
    const expanWidthSidebar = !isExpand ? 'w-[240px]' : 'w-0 md:w-[60px] 2xl:w-[70px] -translate-x-full md:translate-x-0';
    const router = useRouter()
    useEffect(() => {
      const handleRouteChange = (url, { shallow }) => {
        setIsExpand(true)
      }
      router.events.on('routeChangeComplete', handleRouteChange)
     }, [router.events, setIsExpand])


    return (
        <>
        {!isExpand && <div className="absolute inset-0 backdrop-blur bg-white/80 dark:bg-black/80 z-10 block md:hidden" onClick={() => setIsExpand(!isExpand)}></div>}
        <nav id="sidebar" className={`${expanWidthSidebar} bg-white dark:bg-slate-900 inline-flex flex-col justify-between border-r border-gray-200 dark:border-gray-800 fixed top-0 md:top-[60px] z-10 h-full md:h-[calc(100vh-60px)] border-b border-gray-100 shadow`}>
          <div className={`${expanWidthSidebar} overflow-y-auto overflow-x-hidden px-3 py-5`}>
            <div className="block md:hidden flex items-center justify-between pb-2 mb-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-lg font-bold">Medianext UI</span>
              <button type="button" className="bg-white dark:bg-gray-800 inline-flex rounded-xl p-2" onClick={() => setIsExpand(!isExpand)}>
                <XIcon className="w-5 h-5 text-gray-400"/>
              </button>
            </div>
            {/* Dropdown Menu */}
            <SinggleMenu devider>
              <SinggleMenuItem title="My Feeds" href="/" icon={<NewspaperIcon className="w-6 h-6 text-blue-400 stroke-2"/>} expand={isExpand}/>
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
              <SinggleMenuItem title="About" href="/about" icon={<UsersIcon className="w-6 h-6 text-gray-400"/>} expand={isExpand}/>
              <SinggleMenuItem title="Contact" href="/contact" icon={<ChatAltIcon className="w-6 h-6 text-gray-400"/>} expand={isExpand}/>
            </SinggleMenu>
          </div>
          {/* Sidebar Footer */}
          <div className={`inline-flex flex-col gap-y-3 ${isExpand ? 'h-[70px] p-3' : 'h-[100px] p-5'} border-t border-gray-200 dark:border-slate-800 dark:text-slate-200`}>
            {!isExpand ?  
            (<><ul className="inline-flex items-center justify-around text-xs 2xl:text-sm text-gray-400">
              <li><a href="#" className="hover:underline">Sitemap</a></li>
              &bull;
              <li><a href="#" className="hover:underline">Disclaimer</a></li>
              &bull;
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
            <ul className="inline-flex items-center justify-around 2xl:justify-between [&>li]:text-gray-600 hover:[&>li]:bg-slate-100 dark:hover:[&>li]:bg-slate-700">
              <li className="p-2 rounded-full group"><a className="group-hover:text-blue-800" href="#"><FbIcon/></a></li>
              <li className="p-2 rounded-full group"><a className="group-hover:text-violet-800" href="#"><FigmaIcon/></a></li>
              <li className="p-2 rounded-full group"><a className="group-hover:text-black" href="#"><GithubIcon/></a></li>
              <li className="p-2 rounded-full group"><a className="group-hover:text-red-800" href="#"><IgIcon/></a></li>
              <li className="p-2 rounded-full group"><a className="group-hover:text-violet-600" href="#"><TwitchIcon/></a></li>
              <li className="p-2 rounded-full group"><a className="group-hover:text-blue-600" href="#"><TwitterIcon/></a></li>
            </ul></>)
            : 
            <ButtonPlus/>
            } 
          </div>
        </nav>
     </>
    )
}