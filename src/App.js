import React from 'react';
import {About} from './sections/About';
import {Projects} from './sections/Projects';
import {Contact} from './sections/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Link} from './components/Link';
import {HeaderComponent} from './components/HeaderComponent';
import {FooterComponent} from './components/FooterComponent';
import {Expertise} from './sections/Expertise';
import {ScrollToHashElement} from './components/ScrollToHashElement';

// Hauptkomponente, die alle Abschnitte enthält
function MainContent() {
    return (
        <div className="relative w-full bg-zinc-50 dark:bg-black">
            {/* Fixed background with max width */}
            <div className="fixed inset-0 flex justify-center sm:px-8">
                <div className="flex w-full max-w-7xl lg:px-8">
                    <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
                </div>
            </div>

            {/* Content container that respects the same max width */}
            <div className="relative">
                <div className="flex justify-center sm:px-8">
                    <div className="flex w-full max-w-7xl lg:px-12 xl:px-24">
                        <div className="w-full max-w-none px-4 sm:px-8 lg:px-12">
                            <HeaderComponent/>
                            <main>
                                <About />
                                <Expertise />
                                <Projects />
                                <Contact />
                            </main>

                            <FooterComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <ScrollToHashElement/>
            <Routes>
                <Route path="/*" element={<MainContent/>}/>
            </Routes>
        </Router>
    );
}

export default App;
