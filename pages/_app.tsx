import 'styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(()=>{
    const handleRouteChange = () => {
        const el = document.getElementsByTagName('main');
        return el[0].scrollTo({ top: 0, behavior: 'smooth' })
  }
  router.events.on('routeChangeComplete', handleRouteChange)
  },[]);
  return (
    <>
      <NextNProgress options={{ easing: "ease", speed: 500 }} />
      <ThemeProvider defaultTheme="light">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
