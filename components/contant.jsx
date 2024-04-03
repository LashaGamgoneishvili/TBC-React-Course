"use client";
import { useState } from "react";
import Image from "next/image";
import box1 from "../public/Assets/product-images/springl-1.png";
import box2 from "../public/Assets/product-images/springl-2.png";
import box3 from "../public/Assets/product-images/springl-3.png";
import box4 from "../public/Assets/product-images/springl-4.png";
import box5 from "../public/Assets/product-images/springl-5.png";
import box6 from "../public/Assets/product-images/springl-6.png";
import DebounceSearchComponent from "./debounceSearchComponent";
import { Ruthie } from "next/font/google";

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

export default function Content() {
  const [product, setProduct] = useState([]);
  const [sorted, setSorted] = useState(false);

  function handleSort() {
    if (!sorted) {
      setProduct((product) =>
        product.toSorted((a, b) => a.userRating - b.userRating)
      );
      setSorted((sort) => !sort);
      console.log(product.toSorted((a, b) => a.userRating - b.userRating));
    }
    if (sorted) {
      setProduct(
        (product) =>
          (product = product.toSorted((a, b) => b.userRating - a.userRating))
      );
      setSorted((sort) => !sort);
    }
  }

  return (
    <section className="flex flex-col justify-around gap-8">
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
      <div className=" grid  grid-cols-1  items-center justify-items-center gap-y-[8px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6">
        {product.map((product, i) => (
          <div
            key={i}
            className=" border-stale-800 relative flex h-[430px] w-[240px]  flex-col items-center overflow-hidden rounded-lg  border-2  text-[#333]"
          >
            <h1 className="h-16 p-2 text-center text-[14px]">
              {product.Title}
            </h1>
            <Image
              alt="Picture of the Pringles"
              src={product.img}
              priority={true} // {false} | {true}
              className="h-[225px] w-[80px]"
            />
            <p className="mb-6 p-2 text-[12px]">{product.description}</p>
            <button
              className={` group absolute bottom-0 mb-2 rounded-md bg-[#0ea5e9] p-2 text-[#fff] transition-all duration-300 hover:bg-[#0369a1] focus:ring `}
            >
              Add to Chart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
