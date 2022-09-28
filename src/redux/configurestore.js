import { createStore, combineReducers } from 'redux';
import bookReduce from './books/books';
import categReduce from './categories/categories';

const rootReducer = combineReducers({
  book: bookReduce,
  categ: categReduce,
});

const store = createStore(rootReducer);

export default store;
