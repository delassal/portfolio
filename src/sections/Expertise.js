import React from 'react';

const expertiseAreas = [
    {
        id: 1,
        title: '🌐 Web Engineering',
        description: 'Designing and building scalable, interactive web applications with modern technologies',
        skills: [
            'React, Next.js & Tailwind CSS',
            'Node.js, Express & FastAPI',
            'SQL & NoSQL Databases (MySQL, MongoDB)',
            'Deployment on Vercel, Render & Cloud Services'
        ]
    },
    {
        id: 2,
        title: '🎥 Media Systems & Interactive Tech',
        description: 'Bridging media technology and software for dynamic, user-centered experiences',
        skills: [
            'Real-time data dashboards & visualizations',
            'Audio/Video signal processing (Python, JS)',
            'Prototyping with Web APIs & creative frameworks',
            'Strong foundation in media engineering & UX principles'
        ]
    },
    {
        id: 3,
        title: '💡 Creative Engineering',
        description: 'Combining technology, design, and innovation to bring creative ideas to life',
        skills: [
            'Custom UI/UX components & animations',
            'Conceptual product design & branding',
            'Interactive storytelling & multimedia projects',
            'Prototyping & ideation for digital experiences'
        ]
    }
];

export function Expertise() {
    return (
        <section id="expertise" className="py-16 w-full max-w-full">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-8">
                        Expertise
                    </h2>
                    <p className="text-base text-zinc-600 dark:text-zinc-400 mb-8">
                        Turning ideas into interactive tools — with clean code, clever design, and a passion for building things that make a difference.
                    </p>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {expertiseAreas.map((area) => (
                    <div
                        key={area.id}
                        className="group block p-6 rounded-lg bg-white/90 dark:bg-zinc-800/90 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:ring-white/10 transition-all duration-300 hover:shadow-xl hover:ring-primary-400/40 dark:hover:ring-white/20"
                    >
                        <h3 className="text-xl font-medium text-zinc-800 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                            {area.title}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            {area.description}
                        </p>
                        <ul className="mt-4 space-y-2">
                            {area.skills.map((skill, index) => (
                                <li key={index} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}