"use client";
import Image from "next/image";
import IncrementProductButton from "./IncrementButton";
import DecrementProductButton from "./DecrementButton";
import RemoveAllCheckout from "./RemoveItemButton";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Props } from "../../types/types";

export default function CartItem({
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
        key={product.id}
        className=" px-16 w-full h-auto border-light flex flex-col justify-between gap-24 items-center dark:border-[#ffffff] sm:flex-row "
      >
        <div className="flex gap-20 items-center ">
          <div className="overflow-hidden">
            <Link href={`product/${product.id}`}>
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
                <p className="dark:text-[#ffffff] border w-[50px] justify-center flex items-center ">
                  {quantity}
                </p>
                <div className="flex  items-center justify-between  flex-col">
                  <IncrementProductButton
                    productId={productId}
                    setQuantity={setQuantity}
                  />
                  <DecrementProductButton
                    productId={productId}
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                </div>
              </div>
            </div>
            <p className="text-center mr-4 w-24 dark:text-[#ffffff]">
              ${(product.price * quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
