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
  icon: any,
  expand?: Boolean
}

export const SinggleMenuItem = ({ title, icon, expand }: SinggleMenuItem) => {
  const isExpandBlock = !expand ? 'inline-flex block gap-x-3 w-full rounded-xl' : 'inline-block rounded-full';
  return (
    <>
      {/* Singgle Menu Items */}
      <li><a href="#" className={`${isExpandBlock} p-3 hover:bg-gray-100 `}>{ icon } {!expand ? <span>{ title }</span> : ''}</a></li>
    </>
  )
}