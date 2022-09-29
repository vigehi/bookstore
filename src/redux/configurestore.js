import { createStore, combineReducers } from 'redux';
import bookReduce from './books/books';
import categoryReduce from './categories/categories';

const rootReducer = combineReducers({
  book: bookReduce,
  categ: categoryReduce,
});

const store = createStore(rootReducer);

export default store;
