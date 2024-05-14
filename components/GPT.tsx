"use client";
import { useReducer } from "react";
import { useLocalStorageState } from "../hooks";
import { BlogObject } from "../types/types";
import { SelectedProduct } from "../types/types";

const initialState: SelectedProduct[] = [];

type Action =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET" };

function reducer(state: SelectedProduct[], action: Action) {
  switch (action.type) {
    case "INCREMENT": {
      const selectedProductIdx = state.findIndex(
        (product) => product.id === action.payload
      );

      if (selectedProductIdx === -1)
        return [...state, { id: action.payload, count: 1 }];

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
      const selectedProductIdx = state.findIndex(
        (product) => product.id === action.payload
      );
      if (selectedProductIdx === -1) return state;

      const clone = [...state];
      const selectedProduct = clone[selectedProductIdx];
      if (selectedProduct.count <= 1) {
        clone.splice(selectedProductIdx, 1);
      } else {
        const updateSelectedProduct = {
          ...selectedProduct,
          count: selectedProduct.count - 1,
        };
        clone[selectedProductIdx] = updateSelectedProduct;
      }

      return clone;
    }
    case "RESET":
      return [];
    default:
      return state;
  }
}

export default function AddChartButton({
  id,
  product,
}: {
  id: number;
  product: BlogObject;
}) {
  const [selectedProducts, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useLocalStorageState([], "chart");

  function handleClick() {
    dispatch({ type: "INCREMENT", payload: id });
  }

  const selectedNumber = selectedProducts.reduce((acc: number, curr: any) => {
    return acc + curr.count;
  }, 0);

  return (
    <>
      <button
        className="text-sm border-b-2 border-black dark:border-white active:border-b-0"
        onClick={() => handleClick()}
      >
        Add to Chart
      </button>
    </>
  );
}
