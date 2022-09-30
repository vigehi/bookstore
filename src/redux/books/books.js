import { postBook, deleteBook, getBook } from './bookAPI';

const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';
const LOAD = 'bookStore/books/LOAD';

const initialState = [];

export default function bookReduce(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return [...state.filter((book) => book.id !== action.id)];
    default:
      return state;
  }
}

export function add(book) {
  return {
    type: ADD,
    book,
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    id,
  };
}

export const load = (book) => ({
  type: LOAD,
  book,
});

export const displayBooks = () => async (dispatch) => {
  const booksArr = await getBook();
  const booksTemp = [];

  Object.keys(booksArr).forEach((id) => {
    booksTemp.push({
      item_id: id,
      title: booksArr[id][0].title,
      category: booksArr[id][0].category,
    });
  });
  dispatch(load(booksTemp));
};

export function addNewBookApi(book) {
  return async (dispatch) => {
    await postBook(book);
    dispatch(add(book));
  };
}

export function deleteBookApi(bookID) {
  return async (dispatch) => {
    await deleteBook(bookID);
    dispatch(remove(bookID));
  };
}
