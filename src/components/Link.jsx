import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Benutzerdefinierte Link-Komponente, die React Router Links für externe und interne Links unterstützt
export function Link({ to, children, ...props }) {
  // Überprüfe, ob es sich um eine externe URL oder eine interne Route handelt
  const isExternal = to.startsWith('http') || to.startsWith('https') || to.startsWith('mailto');

  // Falls es sich um eine ID-basierte Navigation handelt (auf der gleichen Seite)
  if (to.startsWith('#')) {
    const handleClick = (e) => {
      e.preventDefault();
      const id = to.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <a href={to} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  // Externe Links öffnen in einem neuen Tab
  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  // Für interne Links verwenden wir RouterLink
  return (
    <RouterLink to={to} {...props}>
      {children}
    </RouterLink>
  );
}
