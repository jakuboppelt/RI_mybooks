import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBook } from '../../store/bookshelfs/actions';

function getShelf(shelf) {
  if (!shelf) {
    return 'none';
  }
  return shelf;
}

class MoveToShelf extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.updateBook({ id: this.props.id }, event.target.value, this.props.updateBookshelf);
  }

  render() {
    const shelf = getShelf(this.props.shelf);

    return (
      <select value={shelf} onChange={this.handleChange}>
        <option value="move" disabled>
          Move to...
                     </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    );
  }
}


function mapStateToProps(state) {
  return {
    books: state.books
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateBook: (book, newShelf, updateBookshelf) => {
      dispatch(updateBook(book, newShelf, updateBookshelf));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveToShelf);