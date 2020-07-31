

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
import serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
    
  
  document.getElementById('root')
);

serviceWorker();



