// "use client";
import { Product } from "../types/types";
import { useState, useEffect } from "react";

export default function DebounceSearchComponent({
  setProduct,
}: {
  setProduct: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState<Product[]>([]);

  useEffect(function () {
    async function getData() {
      try {
        const respons = await fetch("https://dummyjson.com/products");
        if (!respons.ok) throw new Error("Fetching is failed");
        const data = await respons.json();
        setData(data.products);
        if (data.Response === "False") throw new Error("product not found");
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  console.log(data);
  useEffect(() => {
    if (!data) {
      // handle case where data is not available
      return;
    }

    // Your existing code
    const debounce = setTimeout(() => {
      const searchedProduct = data.filter((product: Product) =>
        product.title.toUpperCase().startsWith(inputValue.toUpperCase())
      );

      if (inputValue !== "") {
        return setProduct(searchedProduct.sort((a, b) => b.rating - a.rating));
      } else {
        return setProduct(data.sort((a, b) => b.rating - a.rating));
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [inputValue, data, setProduct]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
