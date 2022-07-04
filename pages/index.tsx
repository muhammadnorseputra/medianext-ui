import Head from 'next/head'
import type { NextPage } from 'next'
import { XIcon, MenuIcon, SearchIcon, UserIcon, UsersIcon, ChatAltIcon, MoonIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { FbIcon, FigmaIcon, GithubIcon, IgIcon, TwitchIcon, TwitterIcon } from '@/components/Icons'
import { Dropdown, DropdownItem, DropdownList } from '@/components/Menu/Dropdown'
import { SinggleMenu, SinggleMenuItem } from '@/components/Menu/SinggleMenu'
import { Basic } from '@/components/Notification/Basic'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Medianext UI</title>
        <meta name="description" content="Medianext UI &amp; Base theme with tailwindcss " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="flex bg-white border-b border-gray-200 relative text-gray-800 h-[60px] sticky">
        <div className="inline-flex items-center w-[230px] pl-3">
          <button className="p-2 rounded-full hover:bg-gray-100"><MenuIcon className="w-6 h-6 text-gray-400"/></button> <span className="overflow-hidden whitespace-nowrap block ml-1 text-gray-700 text-xl">Medianext UI</span>
        </div>
        <div className="px-6 inline-flex flex-1 items-center justify-between">
          <div>
            <div className="bg-gray-100 hidden md:inline-flex items-center justify-between gap-x-2 p-3 rounded-xl group">
              {/* Icon Search*/}
              <SearchIcon className="w-5 h-5 text-gray-400"/>
              {/* Search Box*/}
              <input type="text" className="outline-0 ring-0 appearance-none bg-transparent flex-1 w-[320px]" placeholder="Try 'Adventure'"/>
              {/* Close Search */}
              <button className="text-blue-400"><XIcon className="w-4"/></button>
            </div>
          </div>
          <div className="inline-flex justify-end relative items-center">
            <button className="p-2 rounded-full hover:bg-gray-100"><MoonIcon className="w-6 text-gray-400"/></button>
            <button className="p-2 rounded-full hover:bg-gray-100"><UserIcon className="w-6 text-gray-400"/></button>
          </div>
        </div>
      </header>
      {/* Main */}
      <main className="flex overflow-y-auto overflow-x-hidden h-[calc(100vh-60px)]">
        {/* Sidebar */}
        <div className="hidden md:inline-flex flex-col justify-between w-[260px] border-r border-gray-200 sticky top-0">
          <div className="overflow-y-auto overflow-x-hidden h-[calc(100vh-90px)] px-3 py-5">
            {/* Dropdown Menu */}
            <Dropdown devider>
              <DropdownItem title="Internet">
                <DropdownList title="Adsense"/>
                <DropdownList title="Blogger"/>
                <DropdownList title="Tips SEO"/>
                <DropdownList title="Android"/>
              </DropdownItem>
              <DropdownItem title="Proggramer">
                <DropdownList title="HTML5"/>
                <DropdownList title="Css"/>
                <DropdownList title="Javascript"/>
                <DropdownList title="Vue Js"/>
                <DropdownList title="React JS"/>
              </DropdownItem>
            </Dropdown>
            {/* Basic Menu Items */}
            <SinggleMenu>
              <SinggleMenuItem title="About" icon={<UsersIcon className="w-6 h-6 text-gray-400"/>}/>
              <SinggleMenuItem title="Contact" icon={<ChatAltIcon className="w-6 h-6 text-gray-400"/>}/>
            </SinggleMenu>
          </div>
          {/* Sidebar Footer */}
          <div className="inline-flex flex-col gap-y-3 h-[90px] p-5">
            <ul className="inline-flex items-center justify-around">
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
            </ul>
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 w-[calc(100% - 260px)]">
          <Basic message="We come with the latest version 1.6, get this theme through our official site."/>
          <div className="container-sm mx-auto">
              <div className="bg-red-200 w-full h-screen">Mainfsadfasf</div>
              <div className="bg-blue-200  h-screen">Sidebar</div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Home