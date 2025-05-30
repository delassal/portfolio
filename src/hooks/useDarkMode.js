import {useEffect, useState, useRef} from 'react';

export function useDarkMode() {
    const [darkMode, setDarkMode] = useState(false);
    const lastSystemChange = useRef(0);
    const lastUserChange = useRef(0);

    const updateHtmlClass = (enabled) => {
        if (enabled) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const toggleDarkMode = () => {
        const now = Date.now();
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        updateHtmlClass(newDarkMode);
        lastUserChange.current = now;
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const initial = mediaQuery.matches;
        setDarkMode(initial);
        updateHtmlClass(initial);
        lastSystemChange.current = Date.now();

        const handleSystemChange = (event) => {
            const now = Date.now();
            if (now > lastUserChange.current) {
                setDarkMode(event.matches);
                updateHtmlClass(event.matches);
                lastSystemChange.current = now;
            }
        };

        mediaQuery.addEventListener('change', handleSystemChange);

        return () => {
            mediaQuery.removeEventListener('change', handleSystemChange);
        };
    }, []);

    return [darkMode, toggleDarkMode];
}