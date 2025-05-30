import React from 'react';

export function Footer() {
  return (
    <footer className="mt-32 border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
          <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="#about">
            About
          </a>
          <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="#articles">
            Articles
          </a>
          <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="#contact">
            Contact
          </a>
        </div>
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
