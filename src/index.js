
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/app'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
registerServiceWorker();
