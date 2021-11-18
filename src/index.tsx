import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureAppStore } from 'src/redux';
import App from './App';
import './index.css';

export const { store } = configureAppStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
