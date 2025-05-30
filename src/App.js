import React from 'react';
import {HeaderComponent as Header} from './components/HeaderComponent';
import {FooterComponent as Footer} from './components/FooterComponent';
import {About} from './sections/About';
import {Expertise} from './sections/Expertise';
import {Projects} from './sections/Projects';
import {Contact} from './sections/Contact';

function App() {
    return (
        <div className="relative w-full bg-zinc-50 dark:bg-black">
            <div className="fixed inset-0 flex justify-center sm:px-8">
                <div className="flex w-full max-w-7xl lg:px-8">
                    <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
                </div>
            </div>
            <div className="relative flex flex-col">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <Header/>
                    <main>
                        <About/>
                        <Expertise/>
                        <Projects/>
                        <Contact/>
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
