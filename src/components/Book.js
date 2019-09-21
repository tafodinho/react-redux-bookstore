/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import PropTypes from 'prop-types';


const Book = (props) => {
  const { id, title, category } = props.book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
