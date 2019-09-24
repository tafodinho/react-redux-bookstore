const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      return [...state, action.book];
    }
    case REMOVE_BOOK: {
      const newState = state.filter(book => action.id !== book.id);
      return newState;
    }
    default:
      return state;
  }
};

export default booksReducer;
