import dynamic from 'next/dynamic'
import { TsContentType } from '@/utils/Interface'
import { Suspense } from 'react'
import { motion, AnimatePresence } from "framer-motion"

const DynamicHeader = dynamic(() => import('@/components/Layout/Header'))
const DynamicContent = dynamic(() => import('@/components/Layout/Content'))
const Footer = dynamic(() => import('@/components/Layout/Footer'))

const DynamicMobileMenu = dynamic(() => import('@/components/Menu/Mobile'), {
  ssr: false
})

const DynamicSidebar = dynamic(() => import('@/components/Layout/Sidebar'), {
  ssr: false
})


export default function Layout({ children }: TsContentType) {
  
	return (
		<>
			{/* Header */}
      <DynamicHeader/>
      {/* Main */}
      <main className="flex overflow-y-auto overflow-x-hidden h-[calc(100vh-120px)] md:h-[calc(100vh-60px)]">
      {/* Sidebar */}
      <DynamicSidebar/>
      {/* Content */}
      <DynamicContent>
      	{children}
        <div className="container">
          <Footer/>
        </div>
      </DynamicContent>
      </main>
      <DynamicMobileMenu/>
		</>
	)
}