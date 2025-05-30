import React, { useEffect, useState } from 'react';

export function Header() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check if user prefers dark mode
        const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
                          window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());

        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };
    return (
        <header className="flex justify-between items-center py-10">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="h-16 w-16 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10" style={{opacity: 'var(--avatar-border-opacity, 1)', transform: 'var(--avatar-border-transform)'}}>
                        <img alt="Avatar" decoding="async" className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16" src="/avatar.png" style={{color: 'transparent'}} />
                    </div>
                </div>
                <h1 className="text-xl font-bold">
                        Daniel El-Assal
                </h1>
            </div>
            <div className="flex-1 flex justify-center">
                <nav className="pointer-events-auto hidden md:block">
                    <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        <li><a
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="#about">About</a></li>
                        <li><a
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="#expertise">Expertise</a></li>
                        <li><a
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="#projects">Projects</a></li>
                        <li><a
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="pointer-events-auto">
                <button 
                    type="button" 
                    aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"} 
                    onClick={toggleDarkMode}
                    className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                >
                    {/* Sun icon for light mode */}
                    <svg 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        aria-hidden="true" 
                        className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
                    >
                        <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                        <path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none"></path>
                    </svg>

                    {/* Moon icon for dark mode */}
                    <svg 
                        viewBox="0 0 24 24" 
                        aria-hidden="true" 
                        className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400"
                    >
                        <path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}
