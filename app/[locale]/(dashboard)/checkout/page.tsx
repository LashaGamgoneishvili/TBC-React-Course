"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocalStorageState } from "../../../../hooks";
import { SelectedProduct } from "../../../../types/types";
import { useReducerHook } from "../../../../reducer";
import { useAppContext } from "../../../context/index";

import { useProductCart } from "../../../../hooks";

export default function CheckoutPage() {
  const [value, setValue] = useLocalStorageState("chart");
  const [selectedProducts, dispatch] = useReducerHook(value);
  const [isClient, setisClient] = useState(false);
  const { setState } = useAppContext();

  const { addProductsToCart, selectedNumber } = useProductCart(value);

  useEffect(() => {
    if (selectedProducts && selectedProducts.length > 0) {
      setisClient(true);
      setValue(selectedProducts);
      setState(selectedNumber);
    }
  }, [selectedProducts, setValue, setState, selectedNumber]);

  function handleClick(id: number) {
    const selectedProduct = value.find(
      (item: SelectedProduct) => item.id === id
    );
    if (selectedProduct) {
      addProductsToCart();
      dispatch({ type: "INCREMENT", payload: selectedProduct });
    }
  }
  function handleClickDecrement(id: number) {
    const selectedProduct = value.find(
      (item: SelectedProduct) => item.id === id
    );
    if (selectedProduct) {
      addProductsToCart();
      setState(selectedNumber);
      dispatch({ type: "DECREMENT", payload: selectedProduct });
    }
  }
  function handleClickReset() {
    addProductsToCart();
    setState(0);
    setValue([]);
    dispatch({ type: "RESET" });
  }
  function handleClickRemove(id: number) {
    const selectedProduct = value.find(
      (item: SelectedProduct) => item.id === id
    );
    const newPoduct = value.filter((item: SelectedProduct) => item.id !== id);
    if (selectedProduct && selectedProduct.length > 0) {
      setValue(newPoduct);
      dispatch({ type: "REMOVEPRODUCT", payload: selectedProduct });
    } else {
      setValue(newPoduct);
      dispatch({ type: "REMOVEPRODUCT", payload: selectedProduct });
      setState(0);
    }
  }
  return (
    <>
      {isClient ? (
        <div className=" mx-10 grid gap-2 grid-cols-1 px-4 mb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  2xl:grid-cols-5">
          <button
            onClick={handleClickReset}
            className="absolute top-20 right-8"
          >
            Reset
          </button>

          {selectedProducts.map((product: SelectedProduct) => (
            <div
              key={product.id}
              className="flex border-stale-800  dark:border-none relative flex-col h-full shadow-md dark:bg-[#282c34] justify-between products-center rounded-lg border-2 "
            >
              <h1 className=" p-2 text-center text-[14px]">
                {product.product.title}
              </h1>
              <h1 className=" p-2 text-center text-[14px]">{product.count}</h1>
              <Link
                href={`product/${product.product.id}`}
                className="flex justify-center  w-40 h-36 "
              >
                <Image
                  alt="Picture of the Product"
                  src={product.product.thumbnail}
                  priority={true}
                  className="h-auto w-auto"
                  width={150}
                  height={150}
                />
              </Link>
              <p className="p-2 text-xs h-20">{product.product.description}</p>
              <div className="grid grid-flow-row grid-cols-2 gap-2 place-products-stretch mb-2 border-s-violet-200 border-2">
                <p className="p-2 text-xs bg-violet-400 rounded-sm dark:text-black">
                  Discount - {product.product.discountPercentage}%
                </p>
                <p className="p-2 text-xs bg-green-400 rounded-sm  dark:text-black">
                  Price - {product.product.price}$
                </p>
              </div>
              <div className="flex w-full justify-between products-center p-4 ">
                <Link
                  href={`product/${product.product.id}`}
                  className="text-sm  border-b-2 active:border-b-0 border-black dark:border-white"
                >
                  Details
                </Link>
                <div>
                  <button
                    className="  text-sm  border-b-2 border-black dark:border-white active:border-b-0"
                    onClick={() => handleClick(product.product.id)}
                  >
                    +
                  </button>
                  <button
                    className="  text-sm  border-b-2 border-black dark:border-white active:border-b-0"
                    onClick={() => handleClickDecrement(product.product.id)}
                  >
                    -
                  </button>
                  <button
                    className="  text-sm  border-b-2 border-black dark:border-white active:border-b-0"
                    onClick={() => handleClickRemove(product.product.id)}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
