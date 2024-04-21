"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import box1 from "../public/Assets/product-images/springl-1.png";
import box2 from "../public/Assets/product-images/springl-2.png";
import box3 from "../public/Assets/product-images/springl-3.png";
import box4 from "../public/Assets/product-images/springl-4.png";
import box5 from "../public/Assets/product-images/springl-5.png";
import box6 from "../public/Assets/product-images/springl-6.png";
import DebounceSearchComponent from "./debounceSearchComponent";

export const productList = [
  {
    Title: "ORIGINAL CRISPS",
    description:
      "When you're an original, you set the standard for how it's done. And with the tantalizing taste of potato.",
    img: box1,
    userRating: 4.5,
    color: "#de2e38",
  },
  {
    Title: "SOUR CREAM AND ONION CRISPS",
    description:
      "The awesomeness of sour cream, onion and potato together can't be measured by modern science.",
    img: box2,
    userRating: 4.4,
    color: "#60b958",
  },
  {
    Title: "BBQ CRISPS",
    description:
      "Snacking gets awesomer when you add the taste of BBQ to the mix. It's the flavor that brings an outdoorsy vibe.",
    img: box3,
    userRating: 4.3,
    color: "#933565",
  },
  {
    Title: "CHEDDAR CHEESE CRISPS",
    description:
      "We didn't use just any cheese flavor in Pringles® Cheddar Cheese crisps. We went with cheddar - the king of cheeses.",
    img: box4,
    userRating: 4.1,
    color: "#f6af52",
  },
  {
    Title: "CHEDDAR & SOUR CREAM CRISPS",
    description:
      "Imagine a baked potato smothered in cheddar cheese. Then imagine sticking that potato under the broiler.",
    img: box5,
    userRating: 4.4,
    color: "#35c9e7",
  },
  {
    Title: "PIZZA CRISPS",
    description:
      "Pizza makes people happy. Combine the two and your will be known as the happiest place on earth.",
    img: box6,
    userRating: 4.2,
    color: "#fdfdfd",
  },
];

export default function Content({ data }) {
  const [product, setProduct] = useState(data.products);
  const [sorted, setSorted] = useState(false);

  function handleSort() {
    if (sorted) {
      setProduct(
        (product) => (product = product.toSorted((a, b) => b.rating - a.rating))
      );
      setSorted((sort) => !sort);
    }
    if (!sorted) {
      setProduct((product) => product.toSorted((a, b) => a.rating - b.rating));
      setSorted((sort) => !sort);
    }
  }

  return (
    <section className="flex flex-col justify-around gap-4 overflow-y-scroll overflow-x-hidden">
      <div className="flex w-full items-center justify-center gap-1 p-2">
        <DebounceSearchComponent setProduct={setProduct} />
        <button
          className="my-2 [transition:all_ease_0.2s] "
          onClick={handleSort}
        >
          Sort
          <span className="ml-1 text-lg font-semibold">&uarr;&darr;</span>
        </button>
      </div>
      <div className=" grid gap-2 grid-cols-1 px-4 mb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  2xl:grid-cols-5">
        {product ? (
          product.map((item) => (
            <div
              key={item.id}
              className="flex border-stale-800 relative flex-col h-full shadow-md bg-white justify-between items-center rounded-lg border-2 text-[#333] "
            >
              <h1 className=" p-2 text-center text-[14px]">{item.title}</h1>
              <Link
                href={`details/${item.id}`}
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
                <p className="p-2 text-xs bg-violet-400 rounded-sm">
                  Discount - {item.discountPercentage}%
                </p>
                <p className="p-2 text-xs bg-green-400 rounded-sm">
                  Price - {item.price}$
                </p>
              </div>
              <div className="flex w-full justify-between items-center p-4 ">
                <Link
                  href={`details/${item.id}`}
                  className="text-sm border-black border-b-2 active:border-b-0"
                >
                  Details
                </Link>
                <button className="  text-sm text-[#333] border-black border-b-2 active:border-b-0">
                  Add to Chart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center w-full h-screen">
            <h1 className="absolute left-[50%] top-[50%] text-2xl translate-x-[-50%] translate-y-[-160%]">
              Loading ...
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}
