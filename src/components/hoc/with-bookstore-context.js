import React from 'react';
import {BookstoreServiceConsumer} from '../bookstore-service-context';

const withBookService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookStoreService) => {
            return (<Wrapped {...props} bookstoreService = {bookStoreService}/>)
          }
        }
      </BookstoreServiceConsumer>
    );
  }
};

export default withBookService;