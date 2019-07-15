import { search } from '../../BooksAPI';

export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

export function searchQuery(query) {
  return dispatch => {
    return search(query)
      .then((response) => {
        if (response) {
          if (response.error) {
            dispatch(setSeachResults([]));
          }
          else {
            dispatch(setSeachResults(response));
          }
        }
      });
  };
}

export function setSeachResults(results) {
  return {
    type: SET_SEARCH_RESULTS,
    payload: {
      results
    }
  };
}