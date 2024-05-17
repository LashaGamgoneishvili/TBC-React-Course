"use client";
import { useState, useEffect } from "react";
import { SelectedProduct } from "./types/types";

export function useLocalStorageState(key: string, initialState?: any) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialState;

    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (error) {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem("chart", JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export function useProductCart(produdct: SelectedProduct[]) {
  const [selectedNumber, setSelectedNumber] = useState<number>();

  useEffect(() => {
    if (produdct) {
      setSelectedNumber(
        produdct.reduce((acc: number, curr: any) => {
          return acc + curr.count;
        }, 0)
      );
    } else {
      setSelectedNumber(1);
    }
  }, [produdct]);

  const addProductsToCart = () => {};
  addProductsToCart();
  return {
    addProductsToCart,
    selectedNumber,
  };
}
