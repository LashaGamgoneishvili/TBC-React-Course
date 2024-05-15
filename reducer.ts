import { useReducer } from "react";
import { SelectedProduct } from "./types/types";
import { Product } from "./types/types";

const initialState: SelectedProduct[] = [];

type Action =
  | { type: "INCREMENT"; payload: Product }
  | { type: "DECREMENT"; payload: Product }
  | { type: "RESET" };

function reducer(state: SelectedProduct[], action: Action) {
  switch (action.type) {
    case "INCREMENT": {
      if (state === undefined) {
        state = [];
      }

      const selectedProductIdx = state.findIndex(
        (product) => Number(product.id) === action.payload.id
      );

      if (selectedProductIdx === -1) {
        return [
          ...state,
          { id: action.payload.id, product: action.payload, count: 1 },
        ];
      }

      const clone = [...state];

      const selectedProduct = clone[selectedProductIdx];

      const updateSelectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count + 1,
      };

      clone[selectedProductIdx] = updateSelectedProduct;

      return clone;
    }

    case "DECREMENT": {
      if (state === undefined) {
        state = [];
      }
      const selectedProductIdx = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (selectedProductIdx === -1) return state;

      const clone = [...state];
      const selectedProduct = clone[selectedProductIdx];
      const updateSelectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count - 1,
      };
      clone[selectedProductIdx] = updateSelectedProduct;

      return clone;
    }
    case "RESET":
      return initialState;
  }
}

export function useReducerHook(
  value: SelectedProduct[]
): [SelectedProduct[], React.Dispatch<Action>] {
  const [SelectedProducts, dispatch] = useReducer(reducer, value);

  return [SelectedProducts, dispatch];
}
