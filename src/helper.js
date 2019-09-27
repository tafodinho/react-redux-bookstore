const filterBooks = (books, filter) => books.filter((book) => {
  if (filter !== 'ALL') {
    return book.category === filter;
  }
  return true;
});

export default filterBooks;
