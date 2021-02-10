// Обновление/создание элемента в корзине
const updateCartItem = (book, item = {}, quantity) => {

  const {id = book.id, title = book.title, count = 0, total = 0} = item;
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  }
}
// Обновление массива таваров в корзине
const updateCartItems = (cartItems, newItem, idx) => {
  if (newItem.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1),
    ]
  }

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
// Сама функция, которая обновляет корзину
const updateOrder = (state, id, quantity) => {
  debugger
  const {bookList: {books}, shoppingCart: {cartItems}} = state;
  // Сохраняем тело книги из массива books
  const book = books.find((item) => item.id === id);
  // Получаем индекс
  const indexInCart = cartItems.findIndex((item) => item.id === id);
  // Получем элемент из корзины по индксу, если элемента нет, то item будет undefined
  const item = cartItems[indexInCart];
  let newItem = updateCartItem(book, item, quantity)
  //  Если элемент есть, то мы его модифицируем, и ставляем его в середину массива
  return {
    ...state.shoppingCart,
    cartItems: updateCartItems(cartItems, newItem, indexInCart),
    orderTotal: updateTotal(book, state, quantity),
  };
}
const updateTotal = (book, state, quantity) => {
  return state.shoppingCart.orderTotal + book.price * quantity;
};
const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }
  switch (action.type) {
    case 'ADD_BOOK_TO_CART':
      return updateOrder(state, action.payload, 1);
    case 'REMOVE_BOOK_FROM_CART':
      return updateOrder(state, action.payload, - 1);
    case 'REMOVE_ALL_BOOKS_FROM_CART':
      const book = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -book.count);
    default:
      return state.shoppingCart
  }
}

export default updateShoppingCart;