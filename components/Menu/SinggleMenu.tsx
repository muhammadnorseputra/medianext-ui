interface SinggleMenu {
	devider?: Boolean,
	children: any
}

export const SinggleMenu = ({ devider, children }: SinggleMenu) => {
	return (
		<>
			{/* Singgle Menu Container */}
      <ul className={`${devider ? 'br' : '' }`}>
        { children }
      </ul>
		</>
	)
}

interface SinggleMenuItem {
  title: string,  
  icon: any
}

export const SinggleMenuItem = ({ title, icon }: SinggleMenuItem) => {
  return (
    <>
      {/* Singgle Menu Items */}
      <li><a href="#" className="inline-flex block gap-x-3 px-2 py-4 hover:bg-gray-100 w-full rounded-xl">{ icon } <span>{ title }</span></a></li>
    </>
  )
}