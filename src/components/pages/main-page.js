import React from 'react';
import ShoppingCartTable from "../shopping-cart-table";
import BookListContainer from "../containers/book-list-container";

const MainPage = () => {
  return (
    <div>
      <BookListContainer />
      <ShoppingCartTable />
    </div>
  )
}

export default MainPage;