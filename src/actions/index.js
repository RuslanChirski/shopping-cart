const booksLoaded = (payload) => ({type: 'FETCH_BOOKS_SUCCESS', payload});
const booksRequested = () => ({type: 'FETCH_BOOKS_REQUEST'});
const booksError = (payload) => ({type: 'FETCH_BOOKS_FAILURE', payload});
const fetchBooks = (dispatch, service) => () => {
    const { getAll } = service;
    dispatch(booksRequested());
    getAll()
      .then((data) => dispatch(booksLoaded(data)))
      .catch((error) => dispatch(booksError(error)))
};
const addBookToCart = (bookId) => ({type: 'ADD_BOOK_TO_CART', payload: bookId});
const removeBookFromCart = (bookId) => ({type: 'REMOVE_BOOK_FROM_CART', payload: bookId});
const removeAllBooksFromCart = (bookId) => ({type: 'REMOVE_ALL_BOOKS_FROM_CART', payload: bookId});

export {
  fetchBooks,
  addBookToCart,
  removeBookFromCart,
  removeAllBooksFromCart,
};