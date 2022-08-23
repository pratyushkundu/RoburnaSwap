import React from 'react';
import ReactDOM from 'react-dom/client';
import './index10.css';
import App from './App10';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Route'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
