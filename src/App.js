import React from 'react';
import {Header} from './components/Header';
import {About} from './components/About';
import {Expertise} from './components/Expertise';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';

function App() {
    return (
        <div className="bg-white dark:bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    );
}

export default App;
