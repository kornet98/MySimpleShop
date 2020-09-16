// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Application dependencies
//import './index.css';
import App from './App';


// Progressive Web App support
import registerServiceWorker from './registerServiceWorker';

// Redux store
import store from './redux/store'


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
