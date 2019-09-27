const CATEGORY_FILTER = 'CATEGORY_FILTER';

const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case CATEGORY_FILTER: {
      return action.category;
    }
    default:
      return state;
  }
};

export default filterReducer;
