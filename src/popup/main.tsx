import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // We'll create this specific App component for the popup
import './popup.css'; // Optional: create specific CSS

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);