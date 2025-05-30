import React from 'react';

export function About() {
    return (
        <section id="about" className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                        I'm Your Name. I live in City, where I design the future.
                    </h2>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I'm a designer and developer with a passion for creating beautiful, functional digital
                        experiences.
                        I've worked on a variety of projects from mobile apps to websites, always focusing on
                        user-centered design
                        and clean code.
                    </p>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        When I'm not at the computer, I'm usually rock climbing, hanging out with my family, or playing
                        music.
                    </p>
                </div>
                <div className="relative">
                    <img
                        src="https://via.placeholder.com/400x500"
                        alt="Your Name"
                        className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 h-full w-full"
                    />
                </div>
            </div>
        </section>
    );
}
