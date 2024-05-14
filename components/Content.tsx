"use client";
import { useState } from "react";
import DebounceSearchComponent from "./DebounceSearchComponent";
import { BlogObject } from "../types/types";
import AddChartButton from "./ProductList";
// import { useLocalStorageState } from "../hooks";

export default function Content({ data }: { data: BlogObject }) {
  const [_, setProduct] = useState(data.products);
  const [sorted, setSorted] = useState(false);

  function handleSort() {
    if (sorted) {
      setProduct(
        (product) => (product = product.toSorted((a, b) => b.rating - a.rating))
      );
      setSorted((sort) => !sort);
    }
    if (!sorted) {
      setProduct((product) => product.toSorted((a, b) => a.rating - b.rating));
      setSorted((sort) => !sort);
    }
  }

  return (
    <section className="flex flex-col justify-around gap-4 bg-[#f0f0f2] dark:bg-[#21252b] overflow-x-hidden overflow-y-auto ">
      <div className="flex w-full items-center justify-center gap-1 p-2">
        <DebounceSearchComponent setProduct={setProduct} />
        <button
          type="button"
          className="my-2 [transition:all_ease_0.2s] "
          onClick={handleSort}
        >
          Sort
          <span className="ml-1 text-lg font-semibold">&uarr;&darr;</span>
        </button>
      </div>
      <AddChartButton product={data} />
    </section>
  );
}
