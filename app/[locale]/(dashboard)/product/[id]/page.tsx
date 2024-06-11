import { BlogObject } from "../../../../../types/types";
import { getProductAction } from "../../../../../actions";
import { getAllProductAction } from "../../../../../actions";
import ProductDetails from "../../../../../components/productDetails/ProductDetails";

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

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const response = await getProductAction(id);
  const data = response.result;
  return (
    <div className="flex items-center h-screen w-full justify-center overflow-hidden">
      {data && <ProductDetails data={data} />}
    </div>
  );
}
