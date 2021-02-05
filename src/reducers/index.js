const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 180
}

const updateCartItems = (cartItems, newItem, idx) => {
  if (idx < 0) {
    return [
      ...cartItems,
      newItem
    ]
  } else {
    return [
      ...cartItems.slice(0, idx),
      newItem,
      ...cartItems.slice(idx + 1),
    ]
  }
}
const updateCartItem = (book, item = {}) => {
  const {id = book.id, title = book.title, count = 0, total = 0} = item;
  return {
    id,
    title,
    count: count + 1,
    total: total + book.price
  }
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
      //  Сохраняем id книги
      const id = action.payload;
      // Сохраняем тело книги из массива books
      const book = state.books.find((item) => item.id === id);
      // Получаем индекс
      const indexInCart = state.books.findIndex((item) => item.id === id);
      // Получем элемент из корзины по индксу, если элемента нет, то item будет undefined
      const item = state.cartItems[indexInCart];
      let newItem = updateCartItem(book, item)
      //  Если элемент есть, то мы его модифицируем, и ставляем его в середину массива
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, indexInCart),
      }
    default:
      return state;
  }
}

export default reducer;