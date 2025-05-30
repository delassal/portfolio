import React from 'react';

const expertiseAreas = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Building responsive and performant web applications using modern frameworks and technologies.',
        imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
        id: 2,
        title: 'UI/UX Design',
        description: 'Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.',
        imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
        id: 3,
        title: 'Mobile Development',
        description: 'Developing cross-platform mobile applications that deliver native-like experiences.',
        imageUrl: 'https://via.placeholder.com/600x400',
    }
];

export function Expertise() {
    return (
        <section id="expertise" className="py-16">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-8">
                Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {expertiseAreas.map((area) => (
                    <div
                        key={area.id}
                        className="group block"
                    >
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                            <img
                                src={area.imageUrl}
                                alt={area.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-100 group-hover:text-teal-500 transition-colors duration-300">
                            {area.title}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            {area.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}