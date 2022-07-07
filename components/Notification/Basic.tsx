import { XIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'

type Basic = {
	message: string,
	type?: string
}

export const Basic = ({ message, type="info" }: Basic) => {

  const [isNotificationHide, setisNotificationHide] = useState(false);
	const hendleNotification = () => {
    setisNotificationHide(!isNotificationHide);
  }

	return(
	<>
		{/* Notif */}
		{!isNotificationHide ? 
    (<section id="notification" className={`${type} flex justify-between items-center relative h-[60px] text-black py-[10px] px-[25px] text-sm overflow-hidden`}>
      <div className="inline-flex flex-1 items-center justify-center" id="notificationText"> { message } <button className="flex-shrink-0 whitespace-nowrap inline-block mx-2.5 py-2 px-3 rounded bg-blue-800 text-white text-xs font-normal shadow hover:bg-blue-700">Get Now!</button></div>
      <button onClick={hendleNotification} className="p-4 rounded-full hover:bg-white dark:hover:bg-gray-800"><XIcon className="w-5"/></button>
    </section>) : ''
    }
    </>
	)
}