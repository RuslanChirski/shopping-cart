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
const addToCart = (bookId) => ({type: 'ADD_BOOK_TO_CART', payload: bookId});

export {
  fetchBooks,
  addToCart,
};