import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
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
      category: 'Action',
    });
  }

  render() {
    const categories = ['Action', 'Adventure', 'Comedy', 'Story', 'Kids', 'Learning', 'Sci-Fi'];
    const { title } = this.state;
    const options = categories.map((category) => (
      <option value={category} key={category}>{category}</option>
    ));
    return (
      <div className="row form-container">
        <hr />
        <br />
        <p>ADD NEW MOVIE</p>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="title" className="col-sm-6">
            <input
              value={title}
              onChange={(e) => this.handleChange(e)}
              name="title"
              placeholder="Movie Title"
            />
          </label>
          <label htmlFor="category" className="col-sm-4">
            <select name="category" onChange={(e) => this.handleChange(e)}>
              { options }
            </select>
          </label>
          <button type="submit" className="btn col-sm-2">Add Movie</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state,
});
const mapDispatchToProps = (dispatch) => ({
  submitBook: (book) => dispatch(createBook(book)),
});
BookForm.propTypes = {
  submitBook: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
