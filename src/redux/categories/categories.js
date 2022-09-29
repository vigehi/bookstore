const STATUS = 'bookStore/categories/STATUS';

const initialState = 'Unknown status';

export default function categoryReduce(state = initialState, action) {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export function cStatus() {
  return {
    type: STATUS,
  };
}
