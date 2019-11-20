/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';


const initialState = {
  books: [
    {
      id: Math.random(),
      title: 'Titans Reborn',
      category: 'Adventure',
      perComplete: 75,
      chapter: 15,
      author: 'Ngam Cletus',
    },
    {
      id: Math.random(),
      title: 'Farmers Place',
      category: 'Comedy',
      perComplete: 14,
      chapter: 3,
      author: 'Morris Clackton',
    },
    {
      id: Math.random(),
      title: 'The first americas',
      category: 'Story',
      perComplete: 60,
      chapter: 8,
      author: 'Michael Zara',
    },
  ],
  filter: 'ALL',
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
