/* eslint-disable react/no-array-index-key */
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
    const options = categories.map((category) => (
      <option value={category} key={category}>{category}</option>
    ));
    return (
      <div>
        <form>
          <label htmlFor="title">
            Title:
            <input />
          </label>
          <label htmlFor="category">
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

const mapStateToProps = (state) => ({
  books: state,
});
export default connect(mapStateToProps, null)(BookForm);
