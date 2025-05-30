import React from 'react';
import { HeaderComponent as Header } from './components/HeaderComponent';
import { FooterComponent as Footer } from './components/FooterComponent';
import {About} from './sections/About';
import {Expertise} from './sections/Expertise';
import {Projects} from './sections/Projects';
import {Contact} from './sections/Contact';

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
