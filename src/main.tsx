import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Mettre à jour le titre et l'icône
document.title = 'Neuroly - L\'IA, simplement.';

// Ajouter les liens pour les icônes
const head = document.getElementsByTagName('head')[0];

// Icônes standards
const favicon32 = document.createElement('link');
favicon32.rel = 'icon';
favicon32.type = 'image/png';
favicon32.setAttribute('sizes', '32x32');
favicon32.href = '/icons/icon-32x32.png';
head.appendChild(favicon32);

const favicon192 = document.createElement('link');
favicon192.rel = 'icon';
favicon192.type = 'image/png';
favicon192.setAttribute('sizes', '192x192');
favicon192.href = '/icons/icon-192x192.png';
head.appendChild(favicon192);

// Apple Touch Icons
const appleTouchIcon = document.createElement('link');
appleTouchIcon.rel = 'apple-touch-icon';
appleTouchIcon.href = '/icons/icon-180x180.png';
head.appendChild(appleTouchIcon);

// Manifest
const manifest = document.createElement('link');
manifest.rel = 'manifest';
manifest.href = '/icons/site.webmanifest';
head.appendChild(manifest);

// Theme color
const themeColor = document.createElement('meta');
themeColor.name = 'theme-color';
themeColor.content = '#ffffff';
head.appendChild(themeColor);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
