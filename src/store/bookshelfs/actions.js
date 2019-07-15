import { getAll, update } from '../../BooksAPI';

export const SET_BOOKSHELFS = 'SET_BOOKSHELFS';
export const RECEIVE_ALL = 'RECEIVE_ALL';

export function fetchAllBooks() {
  return dispatch => {
    return getAll()
      .then((booksInResponse) => {
        if (!booksInResponse || !Array.isArray(booksInResponse)) {
          return;
        }
        const books = {};
        const bookshelfs = {
          currentlyReading: [],
          wantToRead: [],
          read:[]
        };

        for (let i = 0; i < booksInResponse.length; i++) {
          const book = booksInResponse[i];
          const shelf = bookshelfs[book.shelf];
          if (shelf) {
            shelf.push(book.id);
          }
          books[book.id] = book;
        }
        dispatch(receiveAll(bookshelfs, books));
      });
  };
}

function receiveAll(bookshelfs, books) {
  return {
    type: RECEIVE_ALL,
    payload: { bookshelfs, books }
  };
}

export function updateBook(book, newShelf, updateBookshelf) {
  return dispatch => {
    return update(book, newShelf)
      .then((response) => {
        if (updateBookshelf) {
          dispatch(setBookshelfs(response));
        }
      });
  };
}

function setBookshelfs(bookshelfs) {
  return {
    type: SET_BOOKSHELFS,
    payload: { bookshelfs}
  };
}
