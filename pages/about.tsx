import Head from 'next/head'
import type { NextPage } from 'next'
import Content from '@/components/Layout/Content'


const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Medianext UI</title>
      </Head>
      <div className="container md:max-w-[800px] bg-white dark:bg-gray-700 p-5  md:border-l md:border-r border-gray-200 dark:border-slate-600">
        <div className="flex flex-col space-y-10">
          <div>
            <h1 className="text-2xl dark:text-white">About Us</h1>
          </div>            
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
