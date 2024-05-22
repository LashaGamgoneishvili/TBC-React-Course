import { Product } from "../../types/types";
import { useState } from "react";
import { BlogObject } from "../../types/types";

export default function SortButton({
  setProduct,
  product,
  data,
}: {
  setProduct: React.Dispatch<React.SetStateAction<Product[] | undefined>>;
  product: Product[] | undefined;
  data: BlogObject;
}) {
  const [sorted, setSorted] = useState(true);

  function handleSort() {
    if (sorted && product) {
      setProduct(
        (product) =>
          (product = product?.toSorted((a, b) => b.rating - a.rating))
      );
      setSorted((sort) => !sort);
      console.log(sorted);
    } else {
      setProduct(data.products);
      setSorted((sort) => !sort);
      console.log("else:", sorted);
    }
  }
  return (
    <button
      type="button"
      className="my-2 [transition:all_ease_0.2s] "
      onClick={handleSort}
    >
      Sort
      <span className="ml-1 text-lg font-semibold">&uarr;&darr;</span>
    </button>
  );
}
