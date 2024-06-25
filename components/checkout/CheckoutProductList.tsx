import Image from "next/image";
import IncrementProductButton from "./IncrementButton";
import DecrementProductButton from "./DecrementButton";
import RemoveItemButton from "./RemoveItemButton";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CheckoutProductList({ setTotal, product }: Props) {
  const [quantity, setQuantity] = useState(Number(product.quantity));
  const [sum, setSum] = useState(
    Number(product.price) * Number(product.quantity)
  );

  /* eslint-disable */
  useEffect(() => {
    setTotal((prev: number) => Number(prev) + Number(sum));
  }, []);

  useEffect(() => {
    setSum(Number(quantity) * Number(product.price));
  }, [product.price, quantity]);
  return (
    <>
      <div
        key={product.id}
        className="border-light flex md:gap-2 xl:gap-24 px-4 flex-col  items-center justify-center dark:border-[#ffffff] sm:flex-row "
      >
        <div className="flex md:gap-8 mb-4 sm:mb-0 gap-3 xl:gap-20 sm:flex-row flex-col items-center justify-center ">
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
          <h2 className=" dark:text-[#ffffff] text-center w-52">
            {product.title}
          </h2>
          <RemoveItemButton productId={product.id} quantity={quantity} />
        </div>
        <div className="flex items-center w-auto justify-end gap-10  md:gap-16 xl:gap-44">
          <div className="flex gap-10 sm:gap-28 items-center">
            <p className=" dark:text-[#ffffff] w-16 flex justify-start ">
              {product.price}$
            </p>
            <div className="flex ">
              <p className="dark:text-[#ffffff] border w-[50px] justify-center flex items-center ">
                {quantity}
              </p>
              <div className="flex  items-center justify-between  flex-col">
                <IncrementProductButton
                  productId={product.id}
                  setQuantity={setQuantity}
                  setTotal={setTotal}
                  price={Number(product.price)}
                />
                <DecrementProductButton
                  productId={product.id}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  setTotal={setTotal}
                  price={Number(product.price)}
                />
              </div>
            </div>
          </div>
          <p className="text-center mr-4 w-24 dark:text-[#ffffff]">
            ${sum.toFixed(2)}
          </p>
        </div>
      </div>
      <hr />
    </>
  );
}
