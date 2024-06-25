import { getAllProductAction } from "../../../../actions";
import { getSession } from "@auth0/nextjs-auth0";
import ShopProductList from "../../../../components/shop/ShopProductList";

export default async function Shop({
  searchParams,
}: {
  searchParams?: {
    query: string;
    page: string;
  };
}) {
  const product: BlogObject = await getAllProductAction();
  const session = await getSession();
  const user = session?.user;
  const role = user?.role;
  return (
    <>
      <ShopProductList data={product} searchParams={searchParams} role={role} />
    </>
  );
}
