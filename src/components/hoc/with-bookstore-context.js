import React from 'react';
import {BookstoreServiceConsumer} from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {
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

export default withBookstoreService;