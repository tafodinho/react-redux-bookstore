import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = (props) => {
  const { categories, handleFilterChange } = props;
  const categoryOptions = categories.map((category) => (
    <option value={category} key={category}>{ category }</option>
  ));

  return (
    <select onChange={(e) => handleFilterChange(e)}>
      {categoryOptions}
    </select>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
export default CategoryFilter;
