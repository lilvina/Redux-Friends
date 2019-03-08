import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './App';
//import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk, logger))
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider >
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
