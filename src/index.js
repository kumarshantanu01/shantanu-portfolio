import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//for adding PWA
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//for adding PWA
serviceWorkerRegistration.register();

