"use client";
import Image from "next/image";
import RemoveAllCheckout from "../checkout/RemoveItemButton";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "../../types/types";

export interface Props {
  product: Product;
  initialQuantity: number;
  productId: number;
}

export default function AdminProductList({
  product,
  initialQuantity,
  productId,
}: Props) {
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);
  return (
    <>
      <div
        key={product.product_id}
        className=" px-16 w-full h-auto border-light flex flex-col justify-between gap-24 items-center dark:border-[#ffffff] sm:flex-row "
      >
        <div className="flex gap-20 items-center ">
          <div className="overflow-hidden">
            <Link href={`product/${product.product_id}`}>
              <Image
                className=" rounded-md mb-[25px] cursor-pointer hover"
                width={200}
                height={200}
                src={product.image}
                alt="prodcut"
              />
            </Link>
          </div>
          <h2 className=" dark:text-[#ffffff] w-52">{product.title}</h2>
          <RemoveAllCheckout productId={productId} quantity={quantity} />
        </div>
        <div className="flex justify-around ">
          <div className="flex items-center w-auto justify-end gap-44">
            <div className="flex gap-28 items-center">
              <p className=" dark:text-[#ffffff] w-16 flex justify-start ">
                {product.price}$
              </p>
              <div className="flex ">
                <div className="flex  items-center justify-between  flex-col"></div>
              </div>
            </div>
            <p className="text-center mr-4 w-24 dark:text-[#ffffff]">
              ${(Number(product.price) * quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
