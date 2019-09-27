/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import Header from './Header';

const App = () => (
  <div>
    <Header />
    <div className="container main-section">
      <BookList />
      <BookForm />
    </div>
  </div>
);

export default App;
