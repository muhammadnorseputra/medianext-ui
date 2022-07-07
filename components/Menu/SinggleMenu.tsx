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
  const isExpandBlock = !expand ? 'inline-flex justify-start block gap-x-4 w-full rounded-xl' : 'inline-block rounded-full';
  return (
    <>
      {/* Singgle Menu Items */}
      <li>
        <Link href={href}>
          <a className={`${isExpandBlock} p-4 whitespace-nowrap`}>
            { icon } {!expand ? <span>{ title }</span> : ''}
          </a>
        </Link>
      </li>
    </>
  )
}