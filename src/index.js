import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LanguageContextProvider from './context/LanguageContext';

document.documentElement.style.scrollBehavior = 'smooth';

ReactDOM.render(
  <React.StrictMode>
  	<LanguageContextProvider>
    	<App />
    </LanguageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);