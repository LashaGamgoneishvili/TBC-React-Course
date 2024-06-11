"use client";
import { BlogObject } from "../../types/types";
import DebounceSearchComponent from "./DebounceSearchComponent";
import Link from "next/link";
import Image from "next/image";
import AddChartButton from "./AddChartButton";
import { useEffect, useState } from "react";

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
  const [product, setProduct] = useState(data.result);
  const query = searchParams?.query || "";

  useEffect(() => {
    const searchedProduct = data.result.filter((product) =>
      product.title.toUpperCase().startsWith(query.toUpperCase())
    );
    setProduct(searchedProduct);
  }, [query, data.result]);
  return (
    <>
      <div className="flex w-full items-center justify-center  gap-1 p-2">
        <DebounceSearchComponent data={data} setProduct={setProduct} />
      </div>

      <div className="flex flex-col w-full gap-6 items-center">
        <h1 className="text-[52px]">Popular Items</h1>
        <p className="text-center leading-8">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. <br /> Quis ipsum suspendisse ultrices
          gravida.
        </p>
      </div>
      {/* dark:bg-[#282c34] */}
      {/* bg-[url('https://preview.colorlib.com/theme/timezone/assets/img/hero/about_hero.png')] */}
      <div className=" mx-[12%]  grid gap-12  grid-cols-1 px-4 mb-4  lg:grid-cols-1 xl:grid-cols-2  2xl:grid-cols-3">
        {product?.map((item) => (
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
                  src={item.image}
                  priority={true}
                  width={350}
                  height={100}
                />
              </Link>
              <div className="bg-[#f81f1f] h-[2px] w-full absolute bottom-0"></div>
              <div className="absolute  flex items-center  justify-center h-[60px] group-hover:bg-[#f81f1f] -bottom-[58px] bg-transparent group-hover:bottom-0  w-full duration-500">
                <AddChartButton productId={item.product_id} />
              </div>
            </div>
            <p className=" text-xl   z-10 w-full text-center ">
              {item.description}
            </p>
            <p className="text-center ">Price - {item.price}$</p>
          </div>
        ))}
      </div>
    </>
  );
}
