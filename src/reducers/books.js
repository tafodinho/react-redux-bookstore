const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [
  {
    id: Math.random(),
    title: 'Hello World',
    category: 'Poetry',
  },
  {
    id: Math.random(),
    title: 'Farmers Place',
    category: 'Agriculture',
  },
  {
    id: Math.random(),
    title: 'The first americas',
    category: 'History',
  },
];
const booksReducer = (state = initialState, action) => {
  const tempBook = [...state];
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      tempBook.splice(action.book, 1);
      return tempBook;
    default:
      return state;
  }
};

export default booksReducer;
