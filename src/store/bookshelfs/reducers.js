import { RECEIVE_ALL, SET_BOOKSHELFS } from './actions';

const initialState = {
  currentlyReading: [],
  wantToRead: [],
  read: []
};

export function bookshelfs(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL:
    case SET_BOOKSHELFS:
      return action.payload.bookshelfs;
    default:
      return state;
  }
}