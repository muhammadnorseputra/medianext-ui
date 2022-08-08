import 'styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <meta content='width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5' name='viewport' />
    </Head>
      <NextNProgress options={{ easing: "ease-out", speed: 500 }} />
      <ThemeProvider defaultTheme="system">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
