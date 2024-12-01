import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/quotes.scss';
import Quotes from './components/quotes';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Quotes/>
  </React.StrictMode>
);
reportWebVitals();
