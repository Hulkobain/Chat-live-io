import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorked from './registerServiceWorked';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import chat from './reducers'

const store = createStore(chat)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorked();