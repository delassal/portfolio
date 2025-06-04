import React, { useState, useRef } from 'react';
import { Transition } from '@headlessui/react';

export function Legal() {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Legal Notice Link zum Hovern */}
      <button
        className="transition text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 text-sm font-medium"
      >
        Legal Notice
      </button>

      {/* Popup-Dialog */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
        className="fixed sm:absolute bottom-auto sm:bottom-full left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 top-1/2 sm:top-auto -translate-y-1/2 sm:translate-y-0 sm:mb-2 w-80 sm:w-96 z-50"
      >
        <div 
          ref={popupRef}
          className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:ring-white/10 transition-all duration-300 p-6 text-left"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Legal Notice</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-zinc-500 dark:text-zinc-300 dark:hover:text-zinc-200"
            >
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
            <h4 className="font-medium mb-2">Information according to § 5 TMG:</h4>
            <p>Daniel El-Assal</p>
            <p>Schlimmhohl 8</p>
            <p>56269 Dierdorf</p>

            <h4 className="font-medium mt-4 mb-2">Contact:</h4>
            <p>
              <a 
                href="https://www.linkedin.com/in/danielelassal/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                LinkedIn: danielelassal
              </a>
            </p>

            <h4 className="font-medium mt-4 mb-2">Responsible for content according to § 55 Abs. 2 RStV:</h4>
            <p>Daniel El-Assal</p>
            <p>Schlimmhohl 8</p>
            <p>56269 Dierdorf</p>
          </div>
        </div>
      </Transition>
    </div>
  );
}
