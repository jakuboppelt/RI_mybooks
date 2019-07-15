import React from 'react';
import PropTypes from 'prop-types';

import { BookContainer } from '../Book/';

export class BookshelfComponent extends React.Component {

  render() {
    const { title, books, shelf } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid"> {
            books.map((bookID, index) =>
              <BookContainer key={'book' + index} id={bookID} shelf={shelf} updateBookshelf={true}/>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

BookshelfComponent.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array,
  shelf: PropTypes.string
};

export default BookshelfComponent;