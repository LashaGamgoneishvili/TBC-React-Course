"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../types/types";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import ProductImageUpload from "../../ProductImageUpload";
import { updateProductAction } from "../../../actions";
import DeleteProductButton from "./DeteleProductButton";

export default function AdminProductList({ product }: { product: Product }) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [discount, setDiscount] = useState(product.discount);
  const [image] = useState(product.image);

  console.log("product.product_id", product.product_id);
  return (
    <>
      {!edit && (
        <div
          key={product.product_id}
          className=" px-16 w-full h-auto border-light flex flex-col justify-between gap-24 items-center dark:border-[#ffffff] sm:flex-row "
        >
          <div className="flex gap-20 items-center ">
            <div className="overflow-hidden">
              <Link href={`product/${product.product_id}`}>
                <Image
                  className=" mb-[25px] cursor-pointer hover shadow-md"
                  width={200}
                  height={200}
                  src={image}
                  alt="prodcut"
                />
              </Link>
            </div>
            <h2 className=" dark:text-[#ffffff] w-52">{product.title}</h2>
          </div>
          <div className="flex justify-around ">
            <div className="flex items-center w-auto justify-end gap-44">
              <div className="flex gap-28 items-center">
                <p>{description}</p>
                <p className=" dark:text-[#ffffff] w-16 flex justify-start ">
                  {price}$
                </p>
              </div>
            </div>
          </div>
          <div onClick={() => setEdit(true)} className="cursor-pointer">
            <CiEdit />
          </div>
          <DeleteProductButton id={product.product_id} />
        </div>
      )}

      {edit && (
        <div className="flex px-16 animate-appear items-center transition justify-center gap-3 ease-out translate-x-0 duration-700">
          <div className="overflow-hidden">
            <ProductImageUpload
              productImage={product.image}
              productId={product.product_id}
            />
          </div>
          <form
            action={updateProductAction}
            className="flex items-center justify-end w-full gap-3"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-xs font-semibold">
                title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded-md px-4 text-black py-1   border-black border"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="description" className="text-xs font-semibold">
                description
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="rounded-md px-4 text-black py-1 w-96 min-h-10 border-black border"
              />
            </div>
            <div className="flex flex-col gap-1 w-32">
              <label htmlFor="price" className="text-xs font-semibold">
                price
              </label>
              <input
                id="price"
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="rounded-md px-4 text-black py-1  border-black border"
              />
            </div>
            <div className="flex flex-col gap-1 w-32">
              <label htmlFor="discount" className="text-xs font-semibold">
                discount
              </label>
              <input
                id="discount"
                type="number"
                name="discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                className="rounded-md px-4 text-black py-1  border-black border"
              />
            </div>
            <input
              type="text"
              className="hidden"
              name="ProductId"
              value={product.product_id}
            />
            <button
              type="submit"
              onClick={() => setEdit(false)}
              className="px-4 rounded-md mt-4  text-white bg-[#3b82f6] py-1  hover:bg-sky-700  duration-500"
            >
              Save
            </button>
          </form>
          <button onClick={() => setEdit(false)} className="mt-4 p-2 text-xl">
            &#10005;
          </button>
        </div>
      )}
    </>
  );
}
