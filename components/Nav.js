import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { attributes } from '../content/nav.md'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

{/**
Displays the navbar
Adapted from code at https://tailwindui.com/components/application-ui/navigation/navbars
 */}
export default function Nav({page}) {
  let { logo, navigation, socials } = attributes;

  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <button>
                      <img
                        className="block h-12 w-auto lg:hidden"
                        src={logo}
                        alt="Bumpy Bot Logo"
                      />
                      <img
                        className="hidden h-12 w-auto lg:block"
                        src={logo}
                        alt="Bumpy Bot Logo"
                      />
                    </button>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <button
                          className={classNames(
                            (item.name === page) ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-700 hover:text-white',
                            'rounded-md px-3 py-3 text-sm font-medium'
                          )}
                          aria-current={(item.name === page) ? 'page' : undefined}
                        >
                          {item.name}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {socials.map((social) => (
                <div key={social.name} className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <a href={social.href}>
                    <button
                      type="button"
                      className="text-slate-500 hover:text-slate-600 focus:text-black hidden sm:block"
                    >
                      <span className="sr-only">{social.name}</span>
                      <FontAwesomeIcon icon={"fa-brands fa-" + social.fa_icon} className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    (item.name === page) ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={(item.name === page) ? 'page' : undefined}
                >
                  <Link href={item.href}>{item.name}</Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}