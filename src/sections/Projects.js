import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of the project and what technologies were used.',
    imageUrl: 'https://via.placeholder.com/600x400',
    link: '#'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of the project and what technologies were used.',
    imageUrl: 'https://via.placeholder.com/600x400',
    link: '#'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of the project and what technologies were used.',
    imageUrl: 'https://via.placeholder.com/600x400',
    link: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a 
            key={project.id}
            href={project.link}
            className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative aspect-video">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-secondary-800 dark:text-secondary-100 group-hover:text-primary-500 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
