import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc'
import { fetchBooks, addToCart } from '../../actions';
import {compose} from '../../utils';
import PropTypes from 'prop-types';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import BookList from "../book-list";

class BookListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    const { books, loading, error, addBookToCart } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <BookList books={books} onBookAdded={addBookToCart}/>
  }
}

BookListContainer.propTypes = {
  booksLoaded: PropTypes.func,
  booksRequested: PropTypes.func,
  booksError: PropTypes.func,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = ({books, loading, error}) => {
  return {
    books,
    loading,
    error
  }
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    addBookToCart: (bookId) => dispatch(addToCart(bookId))
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);