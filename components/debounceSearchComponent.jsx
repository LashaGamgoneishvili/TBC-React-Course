"use client";
import { useState, useEffect } from "react";
import { productList } from "./contant";

export default function DebounceSearchComponent({ setProduct }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      const searchedProduct = productList.filter((product) => {
        return product.Title.toUpperCase().startsWith(inputValue);
      });

      if (inputValue !== "") {
        setProduct(
          (product) =>
            (product = [
              ...searchedProduct.toSorted(
                (a, b) => b.userRating - a.userRating
              ),
            ])
        );
      } else {
        setProduct(
          (product) =>
            (product = [
              ...productList.toSorted((a, b) => b.userRating - a.userRating),
            ])
        );
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [inputValue, setProduct]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toUpperCase());
  };

  return (
    <div>
      <input
        className="w-[40rem] justify-self-center rounded-[0.7rem] bg-[#e2e2e2]  px-2 py-2 [transition:all_0.3s] focus:bg-[#fff]"
        type="text "
        placeholder="Search Product..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
