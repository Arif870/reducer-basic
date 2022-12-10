import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import {
  initialState,
  ProductReducer,
} from "./../state/ProductState/ProductReducer";
import { ActionTypes } from "./../state/ProductState/ActionTypes";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  console.log(state);
  useEffect(() => {
    dispatch({ type: ActionTypes.FETCHING_START });
    fetch("/products.json")
      .then(res => res.json())
      .then(data =>
        dispatch({ type: ActionTypes.FETCHING_PRODUCTS, payload: data })
      )
      .catch(() => {
        dispatch({ action: ActionTypes.FETCHING_ERROR });
      });
  }, []);
  const value = {
    state,
    dispatch,
  };

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProductProvider;
