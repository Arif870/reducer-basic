import { ActionTypes } from "./ActionTypes";
export const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
};

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.FETCHING_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case ActionTypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return {
        state,
      };
  }
};
