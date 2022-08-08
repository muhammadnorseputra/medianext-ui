import { TagIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import type { NextPage } from 'next'
import posts from 'dummy/posts.json'
import { CardArticleFeatured, CardArticlePopuler, CardArticleLikeMedium } from '@/components/Posts/CardArticle'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const LabelPost: NextPage = () => {
	const { data } = posts 
	return (
		<>
			<div className="max-w-3xl container px-6 md:px-12 py-10 border-l border-r border-gray-200 dark:border-slate-700">
				<div className="flex flex-col items-center justify-center space-y-2">
					<span className="p-3 bg-gray-200 border border-gray-200 dark:bg-gray-800 dark:border-slate-700 rounded-full"><TagIcon className="w-6 h-6 text-gray-600 rotate-90"/></span>
					<h1 className="text-3xl font-bold">Olahraga</h1>
				</div>
				<div className="my-5">
					<Tab.Group>
				      <Tab.List as="div" className="w-full bg-transparent dark:bg-gray-800 z-10 border-b border-gray-200 dark:border-slate-700 [&>*]:p-3 [&>*]:translate-y-[1px] [&>*]:font-bold flex items-center justify-center space-x-2">
				        <Tab className={({ selected }) => selected ? 'border-b border-blue-600' : 'border-b border-transparent'}>Trending</Tab>
				        <Tab className={({ selected }) => selected ? 'border-b border-blue-600' : 'border-b border-transparent'}>Latest</Tab>
				      </Tab.List>
				      <Tab.Panels as="div" className="py-10">
				        <Tab.Panel as="div" className="grid grid-cols gap-10 pb-3">				        	
				                {
				                   data.map((data, i) => (!data.isfeatured ? <CardArticleLikeMedium key={i} title={data.title} cover={data.cover} summary={data.summary} {...data}/> : ''))
				                }
				        </Tab.Panel>
				        <Tab.Panel>Content for label latest</Tab.Panel>
				      </Tab.Panels>
				    </Tab.Group>
				</div>
			</div>
		</>
	)
}

export default LabelPost