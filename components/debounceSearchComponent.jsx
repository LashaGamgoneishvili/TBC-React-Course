"use client";
import { useState, useEffect } from "react";

export default function DebounceSearchComponent({ setProduct }) {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState();

  useEffect(function () {
    async function getServerSideProps() {
      try {
        const respons = await fetch("https://dummyjson.com/products");

        if (!respons.ok) throw new Error("Fetching is failed");
        const data = await respons.json();
        setData(data.products);
        if (data.Response === "False") throw new Error("product not found");
      } catch {}
    }
    getServerSideProps();
  }, []);

  useEffect(() => {
    if (data) {
      const debounce = setTimeout(() => {
        const searchedProduct = data.filter((product) =>
          product.title.toUpperCase().startsWith(inputValue.toUpperCase())
        );

        if (inputValue !== "") {
          return setProduct(
            searchedProduct.sort((a, b) => b.rating - a.rating)
          );
        } else {
          return setProduct(data.sort((a, b) => b.rating - a.rating));
        }
      }, 500);

      return () => clearTimeout(debounce);
    }
  }, [inputValue, data, setProduct]);

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
