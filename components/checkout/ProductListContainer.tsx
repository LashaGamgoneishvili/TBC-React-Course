"use client";
import { useState } from "react";
import Link from "next/link";
import CheckoutProductList from "./CheckoutProductList";
import ShippingForm from "./ShippingForm";
import RemoveAllCheckout from "./RemoveAllCeckout";
import { createOrder, deleteAllItem } from "../../actions";
import { useAppContext } from "../../app/context/index";

export default function ProductListContainer({
  products,
}: {
  products: CheckoutProduct[];
}) {
  const [total, setTotal] = useState(0);
  const { setState } = useAppContext();

  console.log("products, products", products);
  const checkout = async () => {
    await fetch(`/api/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: products }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response: any) => {
        console.log("response-456", response);
        if (response.url) {
          window.location.href = response.url;
          // console.log(response.url);
          deleteAllItem();
          setState(0);
          createOrder();
        }
      });
  };

  return (
    <>
      {products.map((product: CheckoutProduct, idx: number) => (
        <CheckoutProductList key={idx} setTotal={setTotal} product={product} />
      ))}
      <div className="flex justify-between mx-4 my-4">
        {products?.length > 0 && <RemoveAllCheckout />}
        <button
          onClick={checkout}
          className="  bg-[#3b82f6] text-white px-14 py-4 hover:bg-white hover:text-[#ff2020] border duration-500 border-white hover:border-[#3b82f6] rounded-md "
        >
          Buy Now
        </button>
      </div>
      <hr className="w-full" />
      <div className="w-full flex flex-col items-end">
        <div className=" flex my-4 pb-4 gap-24 px-4">
          <span className="font-bold">Subtotal</span>
          <span className="float-right">${total.toFixed(2)}</span>
        </div>
        <hr className="w-full" />
        <ShippingForm products={products} />
        <hr className="w-full mb-8" />
        <div className="flex justify-end w-full gap-4 ">
          <Link
            href={"/shop"}
            className="  bg-[#3b82f6] text-white px-14 py-4 hover:bg-white hover:text-[#ff2020] border duration-500 border-white hover:border-[#3b82f6] rounded-md "
          >
            continue shopping
          </Link>
        </div>
      </div>
    </>
  );
}
