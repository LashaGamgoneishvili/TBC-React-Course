import { getAllProductAction } from "../../../../actions";
import { BlogObject } from "../../../../types/types";

import Image from "next/image";

export async function generateStaticParams() {
  try {
    const response = await getAllProductAction();

    if (!response || typeof response.json !== "function") {
      throw new Error("Response is not a valid JSON response");
    }

    const products: BlogObject = await response.json();

    const paths = products.result.map((product) => ({
      locale: "en",
      product_id: product.product_id.toString(),
    }));
    const paths2 = products.result.map((product) => ({
      locale: "ka",
      product_id: product.product_id.toString(),
    }));

    return paths.concat(paths2);
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

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
