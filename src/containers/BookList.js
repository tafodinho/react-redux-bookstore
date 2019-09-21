/* eslint-disable react/jsx-filename-extension */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
          books.map((book, key) => {
            return <Book book={book} key={key} />;
          })
        }
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};
BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};
export default connect(mapStateToProps, null)(BookList);
