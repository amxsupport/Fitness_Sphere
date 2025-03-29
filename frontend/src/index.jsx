import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

console.log('Starting application...');

const container = document.getElementById('root');
if (!container) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(container);
console.log('Root element found, rendering app...');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log('App rendered successfully');
