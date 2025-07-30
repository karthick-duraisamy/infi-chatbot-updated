// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
// import './index.scss';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reactToWebComponent from 'react-to-webcomponent';

const WebComponent = reactToWebComponent(App, React, ReactDOM);
customElements.define('react-mf', WebComponent);