"use client";
import { useState, useEffect } from "react";

export default function DebounceSearchComponent({ setProduct, data }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      const searchedProduct = data.filter((product) => {
        return product.title.toUpperCase().startsWith(inputValue);
        console.log(searchedProduct);
      });

      if (inputValue !== "") {
        setProduct(
          (product) =>
            (product = [
              ...searchedProduct.toSorted((a, b) => b.rating - a.rating),
            ])
        );
      } else {
        setProduct(
          (product) =>
            (product = [...data.toSorted((a, b) => b.rating - a.rating)])
        );
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [inputValue, setProduct, data]);

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
