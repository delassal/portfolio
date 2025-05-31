import React from 'react';

export function Contact() {
    return (
        <section id="contact" className="py-16">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-8">
                Get in touch
            </h2>
            <div className="max-w-lg">
                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-8">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>
                <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-700/40">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        Send me a message
                    </h3>
                    <form className="mt-6">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name"
                                       className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-secondary-700 dark:bg-secondary-800 dark:text-secondary-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="email"
                                       className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-secondary-700 dark:bg-secondary-800 dark:text-secondary-300"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message"
                                       className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-secondary-700 dark:bg-secondary-800 dark:text-secondary-300"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                            >
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
