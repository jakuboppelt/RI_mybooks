import { RECEIVE_ALL } from '../bookshelfs/actions';

const initialState = {};

export function books(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL:
      return action.payload.books;
    default:
      return state;
  }
}