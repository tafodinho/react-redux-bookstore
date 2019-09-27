/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, filterCategory } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import filterBooks from '../helper';

const BookList = (props) => {
  const { books } = props;
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
      <p className="row">
        <span className="col-sm-2">Filter by</span>
        <CategoryFilter categories={categories} handleFilterChange={handleFilterChange} className="col-sm-6" />
      </p>
      <table>
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
  books: filterBooks(state.books, state.filter),
});
const mapDispatchToProps = (dispatch) => ({
  submitRemoveBook: (book) => dispatch(removeBook(book)),
  submitFilterCategory: (category) => dispatch(filterCategory(category)),
});
BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  submitFilterCategory: PropTypes.func.isRequired,
  submitRemoveBook: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
