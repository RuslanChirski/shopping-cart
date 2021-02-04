import React from "react";
import BookListItem from "../book-list-item";
import PropTypes from 'prop-types';

import './book-list.css'

const BookList = ({books, onBookAdded}) => {

  const booksForRender = books.map((book) => {
    return (
      <li key={book.id}><BookListItem book={book} onBookAdded={onBookAdded}/></li>
    )
  })

  return (
    <ul className='book-list'>
      {booksForRender}
    </ul>
  )
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object)
}

export default BookList;

