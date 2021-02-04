import React from 'react';
import PropTypes from 'prop-types';

import './book-list-item.css'

const BookListItem = ({book, onBookAdded}) => {
  const {title, author, price, coverImage, id } = book;
  return (
    <div className='book-list-item'>
      <div className='book-cover'>
        <img src={coverImage} alt='cover'/>
      </div>
      <div className='book-details'>
        <p className='book-title'>{title}</p>
        <div className='book-author'>{author}</div>
        <div className='book-price'>{price}</div>
        <button className='btn btn-info add-to-cart' onClick={() => onBookAdded(id) }>Add to card</button>
      </div>
    </div>
  )
}

BookListItem.propTypes = {
  book: PropTypes.object.isRequired,
}

export default BookListItem;