/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducer from './reducers';
import './index.css';

const initialState = [
  {
    id: Math.random(),
    title: 'Hello World',
    category: 'Poetry',
  },
  {
    id: Math.random(),
    title: 'Farmers Place',
    category: 'Agriculture',
  },
  {
    id: Math.random(),
    title: 'The first americas',
    category: 'History',
  },
];

const store = createStore(reducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
