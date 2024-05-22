"use client";
import { BlogObject } from "../../types/types";
import DebounceSearchComponent from "./DebounceSearchComponent";
import Link from "next/link";
import Image from "next/image";
import AddChartButton from "./AddChartButton";
import { useState } from "react";

export default function ProductList({ data }: { data: BlogObject }) {
  const [product, setProduct] = useState(data.products);

  return (
    <>
      <div className="flex w-full items-center justify-center gap-1 p-2">
        <DebounceSearchComponent data={data} setProduct={setProduct} />
      </div>

      <div className=" mx-10 grid gap-2 grid-cols-1 px-4 mb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  2xl:grid-cols-5">
        {product?.map((item) => (
          <div
            key={item.id}
            className="flex border-stale-800  dark:border-none relative flex-col h-full shadow-md dark:bg-[#282c34] justify-between items-center rounded-lg border-2 "
          >
            <h1 className=" p-2 text-center text-[14px]">{item.title}</h1>
            <Link
              href={`product/${item.id}`}
              className="flex justify-center  w-40 h-36 "
            >
              <Image
                alt="Picture of the Pringles"
                src={item.thumbnail}
                priority={true}
                className="h-auto w-auto"
                width={150}
                height={150}
              />
            </Link>
            <p className="p-2 text-xs h-20">{item.description}</p>
            <div className="grid grid-flow-row grid-cols-2 gap-2 place-items-stretch mb-2 border-s-violet-200 border-2">
              <p className="p-2 text-xs bg-violet-400 rounded-sm dark:text-black">
                Discount - {item.discountPercentage}%
              </p>
              <p className="p-2 text-xs bg-green-400 rounded-sm  dark:text-black">
                Price - {item.price}$
              </p>
            </div>
            <div className="flex w-full justify-between items-center p-4 ">
              <Link
                href={`product/${item.id}`}
                className="text-sm border-b-2 active:border-b-0 border-black dark:border-white"
              >
                Details
              </Link>
              <AddChartButton productId={item.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
