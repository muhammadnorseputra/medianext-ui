import dynamic from 'next/dynamic'
import {createRef} from 'react'
import { TsContentType } from '@/utils/Interface'
import { Suspense } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { useEffect } from "react";
import { useRouter } from "next/router";

const DynamicHeader = dynamic(() => import('@/components/Layout/Header'))
const DynamicContent = dynamic(() => import('@/components/Layout/Content'))
const Footer = dynamic(() => import('@/components/Layout/Footer'))
const DynamicMobileMenu = dynamic(() => import('@/components/Menu/Mobile'))

const DynamicSidebar = dynamic(() => import('@/components/Layout/Sidebar'), {
  ssr: false
})


export default function Layout({ children }: TsContentType) {
  const scrollableNodeRef = createRef();
  const router = useRouter();
  useEffect(()=>{
    const handleRouteChange = () => {
        const el = document.getElementsByTagName('main');
        console.log(el)
        return el[0].scrollIntoView({  behavior: 'smooth' })
  }
  router.events.on('routeChangeComplete', handleRouteChange)
  },[router.events]);
	return (
		<>
			{/* Header */}
      <DynamicHeader/>
      {/* Main */}
      <SimpleBar scrollableNodeProps={{ ref: scrollableNodeRef }} className="flex overflow-x-hidden h-[calc(100vh-170px)] md:h-[calc(100vh-180px)] xl:h-[calc(100vh-60px)]">
      <main>
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
      </SimpleBar>
      <DynamicMobileMenu/>
		</>
	)
}