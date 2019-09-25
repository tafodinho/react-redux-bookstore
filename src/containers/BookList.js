/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, filterCategory } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BookList = (props) => {
  const { books, filter } = props;
  const filteredBooks = books.filter((book) => {
    if (filter !== '') {
      return book.category === filter;
    }
    return book;
  });

  const categories = ['ALL', 'Action', 'Biography', 'History', 'Agriculture', 'Kids', 'Poetry', 'Sci-Fi'];

  const handleRemoveBook = (book) => {
    const { submitRemoveBook } = props;
    submitRemoveBook(book);
  };

  const handleFilterChange = (e) => {
    const category = e.target.value;
    const { submitFilterCategory } = props;
    submitFilterCategory(category);
  };

  return (
    <div>
      <p>
        View:
        <CategoryFilter categories={categories} handleFilterChange={handleFilterChange} />
      </p>
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
            filteredBooks.map((book) => (
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
  filter: state.filter,
});
const mapDispatchToProps = (dispatch) => ({
  submitRemoveBook: (book) => dispatch(removeBook(book)),
  submitFilterCategory: (category) => dispatch(filterCategory(category)),
});
BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
  submitFilterCategory: PropTypes.func.isRequired,
  submitRemoveBook: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
