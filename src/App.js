import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main>
          <About />
          <Projects />
          <Articles />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
