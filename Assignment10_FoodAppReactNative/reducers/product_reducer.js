import { productActions } from '../actions/index';

const initialState = {
  data: [],
  error: null,
  requesting: false,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActions.PENDING: {
      return { ...state, requesting: true };
    }
    case productActions.FULFILLED: {
      return { ...state, requesting: false, data: action.payload };
    }
    case productActions.REJECTED: {
      return { ...state, requesting: false, error: 'error' };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;