const STATUS = 'bookStore/categories/STATUS';

const initialState = {
  categories: [],
};

export default function categReduce(state = initialState, action) {
  switch (action.types) {
    case STATUS:
      return 'Under creation';
    default:
      return state;
  }
}

export function status() {
  return {
    type: STATUS,
  };
}
