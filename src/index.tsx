import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

CustomElement.init((element, _context) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});

CustomElement.setHeight(150);

