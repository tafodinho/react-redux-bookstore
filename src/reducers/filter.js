const CATEGORY_FILTER = 'CATEGORY_FILTER';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case CATEGORY_FILTER: {
      if (action.category === 'ALL') {
        return '';
      }
      return action.category;
    }
    default:
      return state;
  }
};

export default filterReducer;
