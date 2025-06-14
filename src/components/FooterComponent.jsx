import React from 'react';
import { Link } from './Link';
import { Legal } from '../sections/Legal';

export function FooterComponent() {
    return (
        <footer className="mt-32 border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex gap-6 text-sm font-medium">
                    <Link className="transition text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400" to="#expertise">
                        Expertise
                    </Link>
                    <Link className="transition text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400" to="#projects">
                        Projects
                    </Link>
                    <Link className="transition text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400" to="#about">
                        About
                    </Link>
                    <Legal />
                </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                    &copy; {new Date().getFullYear()} Daniel El-Assal. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
