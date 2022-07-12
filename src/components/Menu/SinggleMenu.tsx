import Link from 'next/link'
import { TsSinggleMenu, TsSinggleMenuItem } from '@/utils/Interface'

export const SinggleMenu = ({ devider, children }: TsSinggleMenu) => {
	return (
		<>
			{/* Singgle Menu Container */}
      <ul className={`${devider ? 'br' : '' } dark:[&>li>a]:text-slate-200 hover:[&>li>a]:bg-blue-100 dark:hover:[&>li>a]:bg-slate-700`}>
        { children }
      </ul>
		</>
	)
}


export const SinggleMenuItem = ({ title, icon, expand, href }: TsSinggleMenuItem) => {
  const isExpandBlock = !expand ? 'inline-flex justify-start items-center block gap-x-2 w-full rounded-xl' : '-translate-x-20 md:-translate-x-0 block md:inline-block rounded-full';
  return (
    <>
      {/* Singgle Menu Items */}
      <li>
        <Link href={href}>
          <a className={`${isExpandBlock} p-2 2xl:p-4 2xl:gap-x-3`}>
            { icon } {!expand ? <span>{ title }</span> : ''}
          </a>
        </Link>
      </li>
    </>
  )
}