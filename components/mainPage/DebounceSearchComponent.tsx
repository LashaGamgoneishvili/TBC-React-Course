import { BlogObject, Product } from "../../types/types";
import { useState, useEffect } from "react";
import SortButton from "./sortButton";

interface Types {
  data: BlogObject;
  setProduct: React.Dispatch<React.SetStateAction<any>>;
}

export default function DebounceSearchComponent({ data, setProduct }: Types) {
  const [inputValue, setInputValue] = useState("");
  const [debounceData, setDebounceData] = useState<Product[]>([]);

  useEffect(function () {
    async function getData() {
      try {
        const respons = await fetch("https://dummyjson.com/products");
        if (!respons.ok) throw new Error("Fetching is failed");
        const data = await respons.json();
        setDebounceData(data.products);
        if (data.Response === "False") throw new Error("product not found");
      } catch (error) {}
    }
    getData();
  }, []);

  useEffect(() => {}, [inputValue, debounceData, data, setProduct]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.toUpperCase());

    if (!data) {
      return;
    }

    // Your existing code
    const debounce = setTimeout(() => {
      const searchedProduct = debounceData.filter((product: Product) =>
        product.title.toUpperCase().startsWith(inputValue.toUpperCase())
      );

      if (inputValue.length > 1) {
        return setProduct(searchedProduct.sort((a, b) => b.rating - a.rating));
      } else {
        return setProduct(data.products);
      }
    }, 500);

    return () => clearTimeout(debounce);
  };

  return (
    <>
      <div>
        <input
          className="w-[40rem] justify-self-center rounded-[0.7rem] bg-[#e2e2e2]  px-2 py-2 [transition:all_0.3s] focus:bg-[#fff]"
          type="text "
          placeholder="Search Product..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <SortButton setProduct={setProduct} product={data.products} data={data} />
    </>
  );
}
