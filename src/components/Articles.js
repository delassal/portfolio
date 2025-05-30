import React from 'react';

const articles = [
  {
    id: 1,
    title: 'Article One',
    description: 'A brief description of what this article is about and why it matters.',
    date: 'January 12, 2023',
    imageUrl: 'https://via.placeholder.com/600x400',
    link: '#'
  },
  {
    id: 2,
    title: 'Article Two',
    description: 'A brief description of what this article is about and why it matters.',
    date: 'March 5, 2023',
    imageUrl: 'https://via.placeholder.com/600x400',
    link: '#'
  },
  {
    id: 3,
    title: 'Article Three',
    description: 'A brief description of what this article is about and why it matters.',
    date: 'June 22, 2023',
    imageUrl: 'https://via.placeholder.com/600x400',
    link: '#'
  }
];

export function Articles() {
  return (
    <section id="articles" className="py-16">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-8">
        Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <a 
            key={article.id}
            href={article.link}
            className="group block"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-100 group-hover:text-teal-500 transition-colors duration-300">
              {article.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {article.date}
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {article.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
