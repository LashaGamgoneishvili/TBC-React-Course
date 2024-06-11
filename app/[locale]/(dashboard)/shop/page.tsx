import { getAllProductAction } from "../../../../actions";
import { BlogObject } from "../../../../types/types";
import Image from "next/image";

export default async function Shop() {
  const product: BlogObject = await getAllProductAction();
  return (
    <div className="grid xl:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-1">
      {product.result.map((product) => (
        <div
          key={product.product_id}
          className="flex flex-col gap-3 justify-center items-center"
        >
          <Image
            src={product.image}
            alt="Product-image"
            width={150}
            height={150}
            priority
          />
          <h1>{product.description}</h1>
        </div>
      ))}
    </div>
  );
}
