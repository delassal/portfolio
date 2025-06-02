import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Diese Komponente ermöglicht die Navigation zu Elementen via Hash-Fragmenten,
// auch wenn man React Router für die Navigation nutzt
export function ScrollToHashElement() {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    // Wenn wir einen Hash in der URL haben
    if (location.hash) {
      // Speichere den Hash
      lastHash.current = location.hash.slice(1); // entferne das # am Anfang
    }

    // Wenn wir einen gespeicherten Hash haben, versuche zu dem Element zu scrollen
    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        const element = document.getElementById(lastHash.current);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  // Diese Komponente rendert nichts
  return null;
}
