import { motion } from "framer-motion"
import { TsSinggleMenu, TsSinggleMenuItem } from '@/utils/Interface'

export const SinggleMenu = ({ devider, children }: TsSinggleMenu) => {
	return (
		<>
			{/* Singgle Menu Container */}
      <ul className={`${devider ? 'br' : '' }`}>
        { children }
      </ul>
		</>
	)
}


export const SinggleMenuItem = ({ title, icon, expand }: TsSinggleMenuItem) => {
  const isExpandBlock = !expand ? 'inline-flex justify-start block gap-x-4 w-full rounded-xl' : 'inline-block rounded-full';
  return (
    <>
      {/* Singgle Menu Items */}
      <li><a href="#" className={`${isExpandBlock} p-4 hover:bg-blue-100 whitespace-nowrap`}><motion.div initial={{scale: 0}} animate={{scale: 1}}>{ icon }</motion.div> {!expand ? <span>{ title }</span> : ''}</a></li>
    </>
  )
}