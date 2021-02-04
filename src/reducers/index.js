const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 180
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
    };
    case 'ADD_BOOK_TO_CART':
      const book = state.books.find((item) => item.id === action.payload);
      const newItem = {
        id: book.id,
        name: book.title,
        count: 1,
        total: book.price,
      };

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          newItem,
        ],
      }
    default:
      return state;
  }
}

export default reducer;