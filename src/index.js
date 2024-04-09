import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './service-worker';

//serviceWorker.register();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//reportWebVitals();