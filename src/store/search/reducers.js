import {  SET_SEARCH_RESULTS } from './actions';

const initialState = {
  results: []
};

export function search(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return action.payload;
    default:
      return state;
  }
}