const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CATEGORY_FILTER = 'CATEGORY_FILTER';

const createBook = (book) => {
  const newBook = book;
  newBook.id = Math.random();
  return {
    type: CREATE_BOOK,
    book: newBook,
  };
};

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

const filterCategory = (category) => ({
  type: CATEGORY_FILTER,
  category,
});

export { createBook, removeBook, filterCategory };
