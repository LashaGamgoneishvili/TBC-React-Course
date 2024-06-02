import { Product } from "../../types/types";
import { useState } from "react";
import { BlogObject } from "../../types/types";

export default function SortButton({
  setProduct,
  product,
  data,
  query,
}: {
  setProduct: React.Dispatch<React.SetStateAction<Product[] | undefined>>;
  product: Product[] | undefined;
  data: BlogObject;
  query: string | undefined;
}) {
  const [sorted, setSorted] = useState(true);
  function handleSort() {
    if (sorted && product) {
      setProduct(
        (product) =>
          (product = product?.toSorted((a, b) => b.rating - a.rating))
      );
      setSorted((sort) => !sort);
    } else {
      {
        query
          ? setProduct(
              (product) =>
                (product = product?.toSorted((a, b) => a.rating - b.rating))
            )
          : setProduct(data.products);
      }
      setSorted((sort) => !sort);
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
