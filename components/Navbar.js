'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Contact', href: '#' },
  ]
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    return (
        <header className="absolute inset-x-0 top-0 z-50 sticky">
            <nav className="flex items-center justify-between p-6 lg:px-8 shadow-md" aria-label="Global">
                <div className="flex items-center lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                    <img
                        className="h-10 w-auto"
                        src="/images/logo1.png"
                        alt=""
                    />
                    </Link>
                    <span className='text-xl font-semibold ml-2'>Visionary Archistry</span>
                </div>
                <div className="flex lg:hidden">
                    <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                    >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className="text-base font-semibold leading-6 text-gray-900">
                        {item.name}
                    </Link>
                    ))}
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                    />
                </a>
                <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                </div>
                <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                </div>
                </div>
            </DialogPanel>
            </Dialog>
        </header>
    );
}
 
export default Navbar;