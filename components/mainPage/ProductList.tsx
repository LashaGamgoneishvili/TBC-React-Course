"use client";
import Link from "next/link";
import Image from "next/image";
import AddCartButton from "./AddChartButton";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import LoadMore from "./LoadeMore";
import { useRouter } from "next/navigation";

// interface UserProfile {
//   email: string;
//   email_verified: boolean;
//   name: string;
//   nickname: string;
//   picture: string;
//   role: string[];
//   sid: string;
//   sub: string;
//   updated_at: string;
// }

export default function ProductList({
  searchParams,
  data,
}: {
  searchParams?: {
    query: string;
    page: string;
  };
  data: BlogObject;
}) {
  const [product, setProduct] = useState(() => data.result.slice(0));
  const [moreContent, setMoreContent] = useState(false);
  const [count, setCount] = useState(1);
  const query = searchParams?.query || "";
  const { user } = useUser();
  const router = useRouter();

  const role = user?.role;

  const firstSixProduct = product.slice(0, 5);

  useEffect(() => {
    const searchedProduct = data.result.filter((product) =>
      product.title.toUpperCase().startsWith(query.toUpperCase())
    );
    setProduct(searchedProduct);
  }, [query, data.result]);

  function handleMoreContant() {
    if (count > 2) {
      return router.push("/shoppingPage");
    }
    setMoreContent(true);
    setCount((count) => count + 1);
  }

  return (
    <>
      <div className="flex flex-col w-full gap-6 items-center">
        <h1 className="xl:text-[52px] text-3xl -z-10">Popular Items</h1>
        <p className="text-center leading-8 text-[#919aa0] px-4">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. <br className="hidden xl:block" /> Quis
          ipsum suspendisse ultrices gravida.
        </p>
      </div>
      {/* <div className="flex w-full items-center justify-center  gap-1 p-2">
        <DebounceSearchComponent data={data} setProduct={setProduct} />
      </div> */}
      {/* dark:bg-[#282c34] */}
      {/* bg-[url('https://preview.colorlib.com/theme/timezone/assets/img/hero/about_hero.png')] */}
      <div className=" mx-1 md:mx-[12%]  grid gap-12  grid-cols-1 px-4 mb-4  lg:grid-cols-1 xl:grid-cols-2  2xl:grid-cols-3">
        {firstSixProduct?.map((item) => (
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
                  width={350}
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
        ))}

        <LoadMore data={data} moreContent={moreContent} page={count} />
      </div>
      <div className=" flex justify-center relative">
        <div
          className={`translate-x-0 bg-[#ff2020]  w-auto before:duration-300 before:w-0 before:left-0 before:absolute before:h-[100%] before:bg-[#4a4a4b] before:transition-all before:ease-in hover:before:w-full  before:-z-10 `}
        >
          <button
            className="text-white  py-4  px-7 text-xl"
            onClick={handleMoreContant}
          >
            {count > 2 ? "Go shopping" : "View More Product"}
          </button>
        </div>
      </div>
    </>
  );
}
