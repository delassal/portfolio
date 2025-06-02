import React from 'react';
import {Link} from '../components/Link';

const projects = [
    {
        id: 1,
        title: 'zilbi 4',
        description: 'A fourth-generation auction platform with a focus on usability, automation, and scalable architecture.',
        imageUrl: '/zilbi-4.png',
        link: 'https://https://reazil.vercel.app/login',
        featured: true,
        hasImage: true,
        technologies: ['React', 'Python', 'FastAPI', 'Node.js', 'Tailwind CSS', 'Flowbite.js', 'Vercel']
    },
    {
        id: 2,
        title: 'aixsolution – New CI & Website',
        description: 'Redesigned the corporate identity and built a modern, responsive website to reflect a fresh, innovative consulting brand.',
        imageUrl: '/aixsolution.png',
        link: 'https://www.aixsolution.com',
        featured: true,
        hasImage: true,
        technologies: ['WordPress', 'JavaScript', 'CSS', 'Sketch', 'Adobe Illustrator', 'Blender']
    },
    {
        id: 3,
        title: 'ACISS SNA',
        description: 'Applied community detection algorithms to analyze intercontinental flight networks using social network analysis techniques.',
        link: '#',
        featured: false,
        hasImage: false,
        technologies: ['R', 'Python']
    },
    {
        id: 4,
        title: 'TU Berlin Mentoring Website',
        description: 'Designed and implemented a clean, user-friendly mentoring website for students at Faculty IV at TU Berlin.',
        link: '#',
        featured: false,
        hasImage: false,
        technologies: ['WordPress', 'CSS', 'JavaScript']
    },
    {
        id: 5,
        title: 'GitHub Projects',
        description: 'Collection of smaller projects, prototypes and experiments...',
        link: 'https://github.com/delassal',
        featured: false,
        hasImage: false,
        technologies: []
    },
    {
        id: 6,
        title: 'Master Thesis @ RWTH Aachen University',
        description: 'Researching the impact of digital innovation on company performance and the role of top management in driving transformation.',
        link: '#',
        featured: true,
        hasImage: false,
        technologies: ['Innovation Research', 'Data Analysis', 'Strategy']
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-16 w-full max-w-full">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-8">
                        Projects
                    </h2>
                    <p className="text-base text-zinc-600 dark:text-zinc-400 mb-8">
                      Selected projects demonstrating my strengths in responsive web development, creative systems, and strategic data analysis.
                    </p>
                </div>

                {/* First row: Two featured cards with images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {projects.filter(p => p.featured && p.hasImage).slice(0, 2).map((project) => (
                        <div
                            key={project.id}
                            className="group block rounded-lg overflow-hidden bg-white/90 dark:bg-zinc-800/90 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:ring-white/10 transition-all duration-300 hover:shadow-xl hover:ring-primary-400/40 dark:hover:ring-white/20"
                        >
                            {project.hasImage && (
                                <div className="relative group">
                                    <div>
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div
                                        className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor"
                                                 className="w-5 h-5 text-zinc-800 dark:text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M13.5 4.5H19.5V10.5M10.5 13.5L19.5 4.5M4.5 19.5H19.5V4.5"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second row: Three smaller cards without images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {projects.filter(p => !p.featured && !p.hasImage).slice(0, 3).map((project) => (
                        <div
                            key={project.id}
                            className={`group block p-6 rounded-lg bg-white/90 dark:bg-zinc-800/90 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:ring-white/10 transition-all duration-300 hover:shadow-xl ${
                                project.title === 'GitHub Projects'
                                    ? 'hover:ring-zinc-600/40 dark:hover:ring-zinc-300/30 relative hover:bg-zinc-800 hover:text-white dark:hover:bg-white dark:hover:text-black'
                                    : 'hover:ring-primary-400/40 dark:hover:ring-white/20'
                            }`}
                        >
                            <h3
                                className={`text-xl font-semibold text-zinc-800 dark:text-zinc-100 ${
                                    project.title === 'GitHub Projects'
                                        ? 'group-hover:text-zinc-100 dark:group-hover:text-black'
                                        : 'group-hover:text-primary-600 dark:group-hover:text-primary-400'
                                } transition-colors duration-300`}
                            >
                                {project.title}
                            </h3>
                            <p
                                className={`mt-2 text-sm ${
                                  project.title === 'GitHub Projects'
                                    ? 'text-zinc-600 group-hover:text-white dark:text-zinc-400 dark:group-hover:text-black'
                                    : 'text-zinc-600 dark:text-zinc-400'
                                }`}
                            >
                                {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.technologies?.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            {project.title === 'GitHub Projects' && (
                                <div
                                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor"
                                             className="w-5 h-5 text-zinc-800 dark:text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M13.5 4.5H19.5V10.5M10.5 13.5L19.5 4.5M4.5 19.5H19.5V4.5"/>
                                        </svg>
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Third row: One large card without image */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    {projects.filter(p => p.featured && !p.hasImage).slice(0, 1).map((project) => (
                        <div
                            key={project.id}
                            className="group block p-8 rounded-lg bg-blue-600 dark:bg-blue-800 text-white shadow-lg ring-1 ring-blue-700/50 dark:ring-blue-900/50 transition-all duration-300 hover:shadow-xl hover:bg-blue-700 dark:hover:bg-blue-900 hover:ring-blue-500/60 dark:hover:ring-blue-600/60"
                        >
                            {/* Animated indicator for a Master Thesis project */}
                            <p className="mb-2 flex items-center text-sm font-medium text-white/80">
                              <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                              </span>
                              Currently Working On
                            </p>
                            <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="mt-2 text-sm text-white/90">
                                {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.technologies?.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-white/20 text-white text-xs font-medium px-2.5 py-0.5 rounded border border-white/20"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
