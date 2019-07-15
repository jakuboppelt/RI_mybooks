import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BookComponent } from './BookComponent';

class Book extends Component {

  render() {
    const book = this.props.book;
    return (<BookComponent title={book.title} authors={book.authors} cover={book.imageLinks} id={book.id} shelf={book.shelf} updateBookshelf={this.props.updateBookshelf} />);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    book: state.books[ownProps.id]
  };
}

export const BookContainer = connect(mapStateToProps)(Book);
export default BookContainer;