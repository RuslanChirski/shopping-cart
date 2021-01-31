import React from 'react';
import Spinner from "../spinner";
import ErrorBoundary from "../error-boundary";
import {BookstoreServiceProvider} from '../bookstore-service-context'
import './app.css';

const App = () => {
  return (
    <ErrorBoundary>
      <BookstoreServiceProvider value='10'>
        <h1>Hello world</h1>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  )
}

export default App;