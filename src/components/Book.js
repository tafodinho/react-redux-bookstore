/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book: { id, title, category, perComplete, chapter, author }, handleRemoveBook } = props;

  return (
    <tr className="row content-row">
      <td className="col-sm-5 left">
        <p className="category-text">{category}</p>
        <p className="title-text">{title}</p>
        <p className="author-name">{ author || "default" }</p>
        <ul>
          <li>Comment</li>
          <li> | </li>
          <li>
            <div
              onClick={() => handleRemoveBook(id)}
              onKeyPress={() => {}}
              role="button"
              tabIndex={0}
            >
              Remove
            </div>
          </li>
        </ul>
      </td>
      <td className="col-sm-4 middle">
        <ul className="clearFix">
          <li className="loader-box">
            <div className="loader" />
          </li>
          <li className="percentage-box">
            <p className="percentage">{ perComplete || 0 }%</p>
            <p className="completed">Completed</p>
          </li>
        </ul>
      </td>
      <td className="col-sm-3 right">
        <div>
          <p className="chapter">CURRENT EPISODE</p>
          <p className="current-chapter">Episode { chapter || 0 }</p>
          <button type="submit" className="btn">UPDATE PROGRESS</button>
        </div>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
