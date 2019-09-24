/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
  }

  handleChange(e) {
    if (e.target.name === 'title') {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.name === 'category') {
      this.setState({
        category: e.target.value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { submitBook } = this.props;
    submitBook(this.state);
    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title } = this.state;
    const options = categories.map(category => (
      <option value={category} key={category}>{category}</option>
    ));
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="title">
            Title:
            <input value={title} onChange={(e) => this.handleChange(e)} name="title" />
          </label>
          <label htmlFor="category">
            Category:
            <select name="category" onChange={(e) => this.handleChange(e)}>
              { options }
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state,
});
const mapDispatchToProps = dispatch => ({
  submitBook: (book) => dispatch(createBook(book)),
});
BookForm.propTypes = {
  submitBook: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
