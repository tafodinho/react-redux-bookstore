/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
  render() {
    return (
			<div>
				<table>
				<tr>
					<th>BookID</th>
					<th>Title</th>
					<th>Category</th>
				</tr>
				<tr>
					<td>1</td>
					<td>memsis</td>
          <td>Poetry</td>
				</tr>
				</table>
			</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state,
  };
};
export default connect(mapStateToProps, null)(BookList);
