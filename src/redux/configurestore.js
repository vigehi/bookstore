import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import bookReduce from './books/books';
import categoryReduce from './categories/categories';

const rootReducer = combineReducers({
  book: bookReduce,
  categ: categoryReduce,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

export default store;
