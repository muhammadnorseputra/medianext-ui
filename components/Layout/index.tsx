import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { TsContentType } from '@/utils/Interface'

const DynamicHeader = dynamic(() => import('@/components/Layout/Header'), {
  suspense: true,
  ssr: false
})

const DynamicSidebar = dynamic(() => import('@/components/Layout/Sidebar'), {
  suspense: true,
  ssr: false
})

const DynamicContent = dynamic(() => import('@/components/Layout/Content'), {
  suspense: true,
  ssr: false
})


export default function Layout({ children }: TsContentType) {
	return (
		<>
			{/* Header */}
		      <Suspense fallback={`Loading...`}>
		        <DynamicHeader/>
		      </Suspense>
		      {/* Main */}
		      <main className="flex overflow-y-auto overflow-x-hidden h-[calc(100vh-60px)]">
		      {/* Sidebar */}
		      <Suspense fallback={`Loading...`}>
		        <DynamicSidebar/>
		      </Suspense>
		      {/* Content */}
		      <Suspense fallback={`Loading...`}>
		        <DynamicContent>
		        	{children}
		        </DynamicContent>
		      </Suspense>
		      </main>
		</>
	)
}