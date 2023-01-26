import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import ContactForm from './ContactForm'
import ResumePdf from "../assets/Resume.pdf"

const navigation = [
  { name: 'Songsemble', href: '#first-feature' },
  { name: 'Blog', href: '#second-feature' },
  { name: 'Other Projects', href: '#other-projects' },
]

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Global">
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-between md:w-auto">
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-10 md:ml-10 md:flex">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium text-white hover:text-gray-300">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <header className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div>
                  <h1 className="serif text-4xl font-bold tracking-wide text-white sm:text-5xl md:text-6xl">
                    Seth Strouf
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Full-stack developer, former educator, father of cats
                  </p>
                  <div className="mt-4 sm:mt-8 sm:mb-4 sm:flex sm:justify-center lg:justify-start group">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={ResumePdf}
                      className="sm:flex sm:items-center rounded-full sm:bg-gray-800 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                    >
                      <span className="rounded-full bg-cyan-600 px-3 py-1 text-md font-semibold leading-5 text-white group-hover:bg-cyan-700">
                        View my resumé
                      </span>
                      <ChevronRightIcon className="hidden sm:block ml-2 h-5 w-5 text-gray-300" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                <div className="bg-gray-50 sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
