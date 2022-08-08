import Head from 'next/head'
import type { NextPage } from 'next'
import Image from 'next/image'
import User from 'public/assets/img/user.webp'
import { GoogleIcon } from '@/components/Icons'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login - Medianext UI</title>
      </Head>
      <div className="bg-white dark:bg-gray-800">
        <div className="mx-auto md:border-l md:border-r md:border-gray-200 dark:border-gray-700 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 px-6 px-16 py-12">
          <div className="space-y-4">
            <a href="#">
              <Image layout="fixed" width="100" height="100" src={User} className="mx-auto inline-block"/>
            </a>
            <p className="font-medium text-lg text-gray-600 dark:text-white">Welcome to Medianext ! Login first</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <button className="h-12 px-6 border border-blue-100 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 transition hover:shadow-xl">
              <div className="flex items-center space-x-3 justify-center">
                <GoogleIcon className="w-6"/>
                <span className="block w-max font-medium tracking-wide text-sm text-gray-700 dark:text-white">with  Google</span>
              </div>
            </button>
            <button className="h-12 px-6 rounded-lg bg-gray-900 transition hover:shadow-xl">
              <div className="flex space-x-4 items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="block w-max font-medium tracking-wide text-sm text-white">with Github</span>
              </div>
            </button>
          </div>
          <div role="hidden" className="mt-12 border-t dark:border-gray-700">
            <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white dark:bg-gray-800">Or</span>
          </div>
          <form className="space-y-8 py-6">
            <div>
              <input type="email" placeholder="Your Email" className="w-full py-3 px-6 ring-1 ring-gray-300 dark:ring-slate-700 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
            </div>
            <div className="flex flex-col items-end">
              <input type="password" placeholder="What's the secret word ?" className="w-full py-3 px-6 ring-1 ring-gray-300 dark:ring-slate-700 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
              <button type="reset" className="w-max p-3 -mr-3">
                <span className="text-sm tracking-wide text-sky-600">Forgot password ?</span>
              </button>
            </div>
            <div>
              <button className="w-full px-6 py-3 rounded-lg bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                <span className="font-semibold text-white text-lg">Login</span>
              </button>
              <button type="reset" className="w-max p-3 -ml-3">
                <span className="text-sm tracking-wide text-sky-600">Create new account</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default About
