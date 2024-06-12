import { getProductAction } from "../../../../../actions";
import ProductDetails from "../../../../../components/productDetails/ProductDetails";

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
