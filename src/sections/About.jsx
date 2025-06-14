import React from 'react';
import {FaLinkedin} from 'react-icons/fa';

const education = [
    {
        title: 'RWTH Aachen University',
        subtitle: 'M.Sc. Management, Business and Economics',
        extra: 'aixsolution, BeBuddy',
        year: '2022 – Present',
    },
    {
        title: 'Shanghai Jiao Tong University',
        subtitle: 'Master in International Business',
        extra: 'Exchange Program',
        year: '2023-2024',
    },
    {
        title: 'Technische Universität Berlin',
        subtitle: 'B.Sc. Media Engineering',
        extra: 'Buddy in the Mentoring Program',
        year: '2018 – 2022',
    },
];

const experience = [
    {
        title: 'Freelance Consultant & Developer',
        subtitle: 'Digital Strategy, Prototyping & Venture Scouting',
        extra: 'Clients in tech, consulting, and early-stage startups',
        year: '2020 – Present',
    },
    {
        title: 'Working Student – ZILONIS',
        subtitle: 'Software & Dashboard Development',
        extra: 'Realtime financial data, full-stack, data pipelines',
        year: '2023 – Present',
    },
    {
        title: 'Consultant – aixsolution',
        subtitle: 'Strategy, Digital Tools & Automation',
        extra: 'Market entry, sourcing automation, client collaboration',
        year: '2023 – Present',
    },
    {
        title: 'Working Student – HELLA Aglaia',
        subtitle: 'Agile Software Development',
        extra: 'Test automation, sprint coordination, SAFe',
        year: '2022 – 2023',
    },
];

export function About() {
    return (
        <section id="about" className="py-16 w-full max-w-full">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="w-full text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-8 inline-flex items-center">
                        Daniel El-Assal
                        <a href="https://linkedin.com/in/danielelassal" target="_blank" rel="noopener noreferrer"
                           className="ml-3 text-zinc-400 hover:text-blue-500 transition-colors duration-300">
                            <FaLinkedin size={28}/>
                        </a>
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">Education</h3>
                        <div className="space-y-4">
                            {education.map((item, index) => (
                                <div key={index}
                                     className="group block p-6 rounded-lg bg-white/90 dark:bg-zinc-800/90 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:ring-white/10 transition-all duration-300 hover:shadow-xl hover:ring-primary-400/40 dark:hover:ring-white/20">
                                    <div className="flex justify-between">
                                        <h4 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{item.title}</h4>
                                        <span className="text-sm text-zinc-500 dark:text-zinc-400">{item.year}</span>
                                    </div>
                                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.subtitle}</p>
                                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">{item.extra}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">Experience</h3>
                        <div className="space-y-4">
                            {experience.map((item, index) => (
                                <div key={index}
                                     className="group block p-6 rounded-lg bg-white/90 dark:bg-zinc-800/90 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:ring-white/10 transition-all duration-300 hover:shadow-xl hover:ring-primary-400/40 dark:hover:ring-white/20">
                                    <div className="flex justify-between">
                                        <h4 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{item.title}</h4>
                                        <span className="text-sm text-zinc-500 dark:text-zinc-400">{item.year}</span>
                                    </div>
                                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.subtitle}</p>
                                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">{item.extra}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
