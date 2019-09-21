/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const options = categories.map((category, key) => {
      return <option value={category} key={key}>{category}</option>;
    });
    return (
      <div>
        <form>
          <label>
            Title:
            <input />
          </label>
          <label>
            Category:
            <select>
              { options }
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state,
  };
};
export default connect(mapStateToProps, null)(BookForm);
