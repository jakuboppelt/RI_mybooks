import { RECEIVE_ALL } from '../bookshelfs/actions';

const initialState = {
  loaded: false
};

export function app(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL:
      return Object.assign({}, state, { loaded: true });
    default:
      return state;
  }
}