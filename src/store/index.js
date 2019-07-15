import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { app } from './app/';
import { books } from './books/';
import { bookshelfs } from './bookshelfs/';
import { search } from './search/';

export function getStore() {
  const reducers = combineReducers({ app, books, bookshelfs, search });
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));
}