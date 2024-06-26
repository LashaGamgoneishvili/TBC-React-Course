import { getSession } from "@auth0/nextjs-auth0";
import { getAllProductAction } from "../../../../actions";
import AdminProductList from "../../../../components/admin/product/ProductList";
import AddProduct from "../../../../components/admin/product/addProduct";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Product } from "@/typings";

export const metadata: Metadata = {
  title: { absolute: "Edit Products" },
  description: "You can edit Products info",
};

export default async function AdminProduct() {
  const response = await getAllProductAction();
  const products = response.result;

  const session = await getSession();
  const user = session?.user;

  console.log("user", user);
  if (user && user?.role.length < 1) {
    redirect("/");
  }

  return (
    <div>
      <AddProduct />
      {products.map((product: Product, idx: number) => (
        <AdminProductList key={idx} product={product} />
      ))}
    </div>
  );
}
