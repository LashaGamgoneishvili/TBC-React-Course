"use client";
import { useEffect, useState } from "react";
import DebounceSearchComponent from "../mainPage/DebounceSearchComponent";
import Link from "next/link";
import Image from "next/image";
import AddCartButton from "../mainPage/AddChartButton";
import ExtraDetails from "../mainPage/ExtraDetails";

export default function ShopProductList({
  data,
  searchParams,
  role,
}: {
  data: BlogObject;
  searchParams?: {
    query: string;
    page: string;
  };
  role: string[];
}) {
  const [product, setProduct] = useState(() => data.result);
  const query = searchParams?.query || "";

  useEffect(() => {
    const searchedProduct = data.result.filter((product) =>
      product.title.toUpperCase().startsWith(query.toUpperCase())
    );
    setProduct(searchedProduct);
  }, [query, data.result]);

  return (
    <>
      <div className="flex lg:w-full items-center justify-center   gap-1 p-2">
        <DebounceSearchComponent data={data} setProduct={setProduct} />
      </div>
      <div className="grid grid-cols-1 mb-24 xl:grid-cols-4 2xl:grid-cols-3 sm:grid-cols-2 sm:mx-[12%] mx-6 gap-6">
        {product.map((item) => (
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
                  height={400}
                />
              </Link>
              <div className="bg-[#f81f1f] h-[2px] w-full absolute bottom-0"></div>

              <div className="absolute cursor-pointer  flex items-center  justify-center h-[60px] group-hover:bg-[#f81f1f] -bottom-[58px] bg-transparent group-hover:bottom-0  w-full duration-500">
                <AddCartButton productId={item.product_id} role={role} />
              </div>
            </div>
            <p className="text-base sm:text-lg  w-full text-center">
              {item.description}
            </p>
            <p className="text-center text-sm md:text-base ">
              Price - {item.price}$
            </p>
          </div>
        ))}
      </div>
      <ExtraDetails />
    </>
  );
}
