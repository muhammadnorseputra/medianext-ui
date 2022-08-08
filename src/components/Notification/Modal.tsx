import { useState, Fragment } from 'react'
import { Dialog, Transition, RadioGroup } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export const ModalReport = ({ isOpen, setIsOpen }) => {
	return (
	<Transition
	  as={Fragment}
      show={isOpen}
    >
		<Dialog onClose={() => setIsOpen(false)} className="relative z-50">
			<Transition.Child
		        enter="transition ease-out duration-600"
		        enterFrom="opacity-0"
		        enterTo="opacity-100"
		        leave="transition ease-in duration-400"
		        leaveFrom="opacity-100"
		        leaveTo="opacity-0"
	      	>
	      {/* The backdrop, rendered as a fixed sibling to the panel container */}
	      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
	      </Transition.Child>

	    
	    <div className="fixed inset-0 overflow-y-auto">
	    <div className="flex min-h-full items-center justify-center p-3 text-center">
	    <Transition.Child
	      enter="transition ease-out duration-400"
	      enterFrom="opacity-0 translate-y-full"
	      enterTo="opacity-1 translate-y-0"
	      leave="transition ease-in duration-400"
	      leaveFrom="opacity-1 translate-y-0"
	      leaveTo="opacity-0 translate-y-full">
		      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl">
              <div className="flex justify-between border-b border-gray-100 pb-4 mb-4">
			      <div>
				      <Dialog.Title
		                    as="h3"
		                    className="text-xl font-bold leading-6 text-gray-900">
		                    Report 
		              </Dialog.Title>
		              <Dialog.Description className="text-gray-400 text-xs md:text-sm">
		              	Please choose information for report this post
		              </Dialog.Description>
	              </div>
	              <div>
	              	<button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-xl" onClick={() => setIsOpen(false)}><XIcon className="w-5 h-5 text-gray-800"/></button>
	              </div>	
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent
                  you an email with all of the details of your order.
                </p>
              </div>
              <div className="flex items-center justify-end border-t border-gray-100 mt-3 pt-3">
		      	<button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded" onClick={() => setIsOpen(false)}>Cencel</button>
		      </div>
		      </Dialog.Panel>
      	</Transition.Child>
		</div>
		</div>
	    </Dialog>
	</Transition>
	)
}