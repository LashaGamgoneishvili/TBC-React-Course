import { getAllProductAction } from "../../../../actions";
import AdminProductList from "../../../../components/admin/ProductList";
import { Product } from "../../../../types/types";

export default async function AdminProduct() {
  const response = await getAllProductAction();
  const products = response.result;

  return (
    <div>
      {products.map((product: Product, idx: number) => (
        <AdminProductList
          key={idx}
          product={product}
          initialQuantity={product.quantity}
          productId={product.product_id}
        />
      ))}
    </div>
  );
}
