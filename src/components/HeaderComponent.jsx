import React, {Fragment} from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import {Popover, Transition} from '@headlessui/react';
import {Link} from './Link';

export function HeaderComponent() {
    const [darkMode, toggleDarkMode] = useDarkMode();

    const navigationItems = [
        // {name: 'Start', href: '#start'},
        {name: 'Expertise', href: '#expertise'},
        {name: 'Projects', href: '#projects'},
        {name: 'About', href: '#about'}
    ];

    return (
        <header className="relative flex items-center py-10">

            {/*Image*/}
            <div className="w-1/3 flex items-center justify-start gap-4">
                <div className="relative">
                    <div
                        className="group h-16 w-16 rounded-full bg-white/0 p-0 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition-all duration-300 hover:h-32 hover:w-32 hover:ring-primary-400/40 dark:bg-zinc-800/0 dark:ring-white/10 dark:hover:ring-white/20 hover:z-10"
                        style={{
                            opacity: 'var(--avatar-border-opacity, 1)',
                            transform: 'var(--avatar-border-transform)'
                        }}>
                        <img alt="Avatar" decoding="async"
                             className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16 transition-all duration-300 group-hover:h-32 group-hover:w-32"
                             src="/src/assets/logo512.png" style={{color: 'transparent'}}/>
                    </div>
                </div>
            </div>

            {/*Menu*/}
            <div className="w-1/3 flex justify-center">
                {/* Desktop Navigation */}
                <nav className="pointer-events-auto hidden md:block">
                    <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition duration-200 hover:ring-primary-400/40 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                        {navigationItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    className="relative block px-3 py-2 transition text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400"
                                    to={item.href}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Navigation */}
                <div className="pointer-events-auto md:hidden">
                    <Popover>

                        <>
                            <Popover.Button
                                className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition hover:ring-primary-400/40 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                                Menü
                                <svg viewBox="0 0 8 6" aria-hidden="true"
                                     className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
                                    <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5"
                                          strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    className="absolute left-1/2 z-10 mt-2 w-screen max-w-xs -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                    <div
                                        className="overflow-hidden rounded-lg bg-white/90 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition hover:ring-primary-400/40 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                                        <div className="relative grid gap-6 p-6">
                                            {navigationItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                                                >
                                                    <div className="ml-3">
                                                        <p className="text-sm font-medium">{item.name}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    </Popover>
                </div>
            </div>

            {/*Dark Mode toggle*/}
            <div className="w-1/3 flex justify-end">
                <button
                    type="button"
                    aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
                    onClick={toggleDarkMode}
                    className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition duration-200 hover:ring-primary-400/40 hover:text-primary-600 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 dark:hover:text-primary-400"
                >
                    {/* Sun icon for light mode */}
                    <svg
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-6 w-6 fill-secondary-100 stroke-secondary-500 transition group-hover:fill-primary-100 group-hover:stroke-primary-600 dark:hidden [@media(prefers-color-scheme:dark)]:fill-primary-50 [@media(prefers-color-scheme:dark)]:stroke-primary-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-primary-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-primary-600"
                    >
                        <path
                            d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                        <path
                            d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                            fill="none"></path>
                    </svg>

                    {/* Moon icon for dark mode */}
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="hidden h-6 w-6 fill-secondary-700 stroke-secondary-500 transition dark:block group-hover:fill-primary-500 group-hover:stroke-primary-400 dark:group-hover:fill-primary-500 dark:group-hover:stroke-primary-400"
                    >
                        <path
                            d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}
