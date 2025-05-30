import React from 'react';

export function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <h1 className="text-xl font-bold">
          <a href="#">
            Daniel El-Assal
          </a>
        </h1>
      </div>
      <div className="flex-1 flex justify-center">
        <nav className="pointer-events-auto hidden md:block">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <li><a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="#about">About</a></li>
          <li><a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="#expertise">Expertise</a></li>
          <li><a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="#projects">Projects</a></li>
          <li><a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="#contact">Contact</a></li>
        </ul>
      </nav>
      </div>
      <div className="w-32"></div>
    </header>
  );
}
