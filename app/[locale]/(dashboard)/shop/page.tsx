import { getAllProductAction } from "../../../../actions";
import { getSession } from "@auth0/nextjs-auth0";
import ShopProductList from "../../../../components/shop/ShopProductList";

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
      {/* <div className="flex w-full items-center justify-center  gap-1 p-2">
        <DebounceSearchComponent data={product} setProduct={setProduct} />
      </div>
      {product.result.map((item) => (
        <div
          key={item.product_id}
          className="flex flex-col h-full gap-2 justify-center  w-full relative overflow-hidden items-center "
        >
          <div className="flex relative group overflow-hidden ">
            <Link
              href={`product/${item.product_id}`}
              className="flex justify-center w-full h-full   "
            >
              <Image
                alt="watch-images"
                src={`${item.image}`}
                priority={true}
                width={400}
                height={100}
              />
            </Link>
            <div className="bg-[#f81f1f] h-[2px] w-full absolute bottom-0"></div>

            <div className="absolute  flex items-center  justify-center h-[60px] group-hover:bg-[#f81f1f] -bottom-[58px] bg-transparent group-hover:bottom-0  w-full duration-500">
              <AddCartButton productId={item.product_id} role={role} />
            </div>
          </div>
          <p className=" text-xl w-full text-center ">{item.description}</p>
          <p className="text-center ">Price - {item.price}$</p>
        </div>
      ))} */}
    </>
  );
}
