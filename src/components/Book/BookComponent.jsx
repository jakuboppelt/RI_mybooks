import React from 'react';
import PropTypes from 'prop-types';

import MoveToShelf from '../MoveToShelf/MoveToShelfContainer';

function thumbnail(cover) {
  if (cover) {
    if(cover.thumbnail) {
      return cover.thumbnail;
    }
  }
  return '';
}

export class BookComponent extends React.Component {

  render() {
    const { title, authors, cover, id, shelf, updateBookshelf } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                'url("' + thumbnail(cover) + '")',
            }}
          />
          <div className="book-shelf-changer">
            <MoveToShelf id={id} shelf={shelf} updateBookshelf={updateBookshelf} />
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

BookComponent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  updateBookshelf: PropTypes.bool.isRequired
};

export default BookComponent;