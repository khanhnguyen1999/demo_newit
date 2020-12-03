import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './Routes'
import AppContext from './context/AppContext'

ReactDOM.render(
  <AppContext>
    <Routes />
  </AppContext>,
  document.getElementById('root')
);
