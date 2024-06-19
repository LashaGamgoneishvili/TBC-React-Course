import { getAllProductAction } from "../../../../actions";
import AdminProductList from "../../../../components/admin/product/ProductList";
import AddProduct from "../../../../components/admin/product/addProduct";

export default async function AdminProduct() {
  const response = await getAllProductAction();
  const products = response.result;

  return (
    <div>
      <AddProduct />
      {products.map((product: Product, idx: number) => (
        <AdminProductList key={idx} product={product} />
      ))}
    </div>
  );
}
