/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <BookList />
        <BookForm />
      </div>
    );
  }
}

export default App;
