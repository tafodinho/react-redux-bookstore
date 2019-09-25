/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BookList = (props) => {
  const { books } = props;
  const handleRemoveBook = (book) => {
    const { submitRemoveBook } = props;
    submitRemoveBook(book);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>BookID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book) => (
              <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});
const mapDispatchToProps = (dispatch) => ({
  submitRemoveBook: (book) => dispatch(removeBook(book)),
});
BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};
BookList.propTypes = {
  submitRemoveBook: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
