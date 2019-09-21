/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';


const BookList = (props) => {
  const { books } = props;

  return (
    <div>
      <table>
        <tr>
          <th>BookID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {
          books.map((book, key) => <Book book={book} key={key} />)
        }
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});
BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};
export default connect(mapStateToProps, null)(BookList);
