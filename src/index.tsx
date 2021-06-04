import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import configureStore from './store';
import { persistedState } from './constants';
import 'sanitize.css';
import './index.css';

// Create Redux store with persisted login state
const store = configureStore(persistedState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
