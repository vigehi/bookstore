const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';

const initialState = {
  bookArr: [],
};

export default function bookReduce(state = initialState, action) {
  switch (action.types) {
    case ADD:
      return {
        ...state,
        bookArr: [...state.bookArr, action],
      };
    case REMOVE:
      return {
        bookArr: [...state.bookArr.filter((book) => book.item_id !== action.item_id)],
      };
    default:
      return state;
  }
}

export function add() {
  return {
    type: ADD,
  };
}

export function remove() {
  return {
    type: REMOVE,
  };
}
