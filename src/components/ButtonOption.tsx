import { DotsVerticalIcon, ExclamationCircleIcon, BookmarkAltIcon, ShareIcon } from '@heroicons/react/outline'
import { Menu, Transition } from '@headlessui/react'
import { useState, Fragment, useCallback } from 'react';
import { ModalReport } from '@/components/Notification/Modal'

export const ButtonOption = () => {
	const [isReport, setIsReport] = useState(false);

	  const handleReport = useCallback(() => {
	    setIsReport(true)
	  }, [])

	  const handleBookmark = useCallback(() => {
	    setIsReport(true)
	  }, [])

	  const handleShare = useCallback(() => {
	    setIsReport(true)
	  }, [])

	return (
	<>
	<Menu as="div" className="relative inline-block text-left">
        <Menu.Button type="button" className="transition-color duration-600 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"> 
          <DotsVerticalIcon className="w-5 h-5 text-gray-400" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100 origin-top-right"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75 origin-top-right"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
        <Menu.Items className="absolute right-0 mt-2 w-56 z-10 overflow-hidden origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button type="button" role="button" onClick={handleReport}
                className={`${
                  active ? 'bg-violet-500 text-white' : 'text-gray-900'
                } flex w-full items-center px-2 py-2 text-sm flex items-center justify-start space-x-3`}
              >
                <ExclamationCircleIcon className="w-5 h-5 text-gray-400"/>
                <span>Report this post</span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button type="button" role="button" onClick={handleBookmark}
                className={`${
                  active ? 'bg-violet-500 text-white' : 'text-gray-900'
                } flex w-full items-center px-2 py-2 text-sm flex items-center justify-start space-x-3`}
              >
                <BookmarkAltIcon className="w-5 h-5 text-gray-400"/>
                <span>Save to bookmark</span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button type="button" role="button" onClick={handleShare}
                className={`${
                  active ? 'bg-violet-500 text-white' : 'text-gray-900'
                } flex w-full items-center px-2 py-2 text-sm flex items-center justify-start space-x-3`}
              >
                <ShareIcon className="w-5 h-5 text-gray-400"/>
                <span>Share</span>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
        </Transition>
      </Menu>
    <ModalReport isOpen={isReport} setIsOpen={setIsReport}/>
    </>
	)
}