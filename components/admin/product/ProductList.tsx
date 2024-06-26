"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import ProductImageUpload from "../../ProductImageUpload";
import { updateProductAction } from "../../../actions";
import DeleteProductButton from "./DeleteProductButton";
import toast from "react-hot-toast";
import { Product } from "@/typings";

export default function AdminProductList({ product }: { product: Product }) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [discount, setDiscount] = useState(product.discount);
  const [image, setImage] = useState(product.image);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(false);
  }, [title, price, description, image, discount]);

  const clinetAction = async (formData: FormData) => {
    const EditProduct = {
      title: formData.get("title"),
      description: formData.get("description"),
      price: formData.get("price"),
      discount: formData.get("discount"),
      image: formData.get("image"),
      id: formData.get("ProductId"),
    };

    const response = await updateProductAction(EditProduct);

    if (response?.error) {
      toast.error(response.error);
      console.log("error", response?.error);
    } else {
      setDisabled(false);
      setEdit(false);
    }
  };

  return (
    <>
      {!edit && (
        <div className=" px-16 w-full  gap-5 border-b md:border-none mb-8 md:mb-0 py-5 md:py-0  h-auto border-light flex flex-col justify-between md:gap-10 lg:gap-24 items-center dark:border-[#ffffff] md:flex-row ">
          <div className="flex flex-col md:flex-row md:gap-5 lg:gap-20 items-center ">
            <div className="overflow-hidden">
              <Link
                href={`product/${product.product_id}`}
                // aria-label="Go to product page"
              >
                <Image
                  className=" mb-[25px] cursor-pointer hover shadow-md h-auto"
                  width={200}
                  height={200}
                  src={image}
                  alt="prodcut"
                />
              </Link>
            </div>
            <h2 className=" dark:text-[#ffffff] text-center w-52 h-auto">
              {product.title}
            </h2>
          </div>
          <div className="flex items-center w-full justify-center ">
            <div className="flex justify-center flex-col sm:flex-row gap-8 md:gap-0 w-full md:justify-between items-center text-sm xl:text-base">
              <p>{description}</p>
              <p className=" dark:text-[#ffffff] w-16 flex justify-start ">
                {price}$
              </p>
            </div>
          </div>
          <div onClick={() => setEdit(true)} className="cursor-pointer">
            <CiEdit />
          </div>
          <DeleteProductButton id={product.product_id} />
        </div>
      )}

      {edit && (
        <div className="flex px-16 animate-appear mb-7 items-center transition justify-center gap-3 ease-out translate-x-0 duration-700">
          <div className="overflow-hidden">
            <ProductImageUpload
              productImage={product.image}
              setImage={setImage}
            />
          </div>
          <form
            action={clinetAction}
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
            <input type="text" className="hidden" name="image" value={image} />
            <button
              type="submit"
              disabled={disabled}
              onClick={() =>
                setTimeout(() => {
                  setDisabled(true);
                }, 200)
              }
              className="px-4 rounded-md mt-4 disabled:bg-gray-400  text-white bg-[#3b82f6] py-1  hover:bg-sky-700  duration-500"
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
