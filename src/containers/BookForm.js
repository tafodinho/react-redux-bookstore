/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';

class BookForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render () {
		const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
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
							{
								categories.map((category, key) => {
									return <option value={category} key={key}>{category}</option>
								})
							}
						</select>
					</label>
				</form>
			</div>
		); 
	}
}

const mapStateToProps = (state) => {
	return {

	};
};
export default connect(mapStateToProps, null)(BookForm);