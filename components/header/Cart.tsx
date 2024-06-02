"use client";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useAppContext } from "../../app/context/index";
import { useEffect } from "react";
import { cartCount } from "../../actions";

export default function Chart() {
  const { state, setState } = useAppContext();

  useEffect(() => {
    async function getCart() {
      const count = await cartCount();
      setState(count);
    }
    getCart();
  }, [setState]);

  return (
    <div className="text-xl relative">
      <Link href="/checkout">
        <span className="absolute text-xs -top-4 right-[5px] text-red-700">
          {state ? state : 0}
        </span>
        <MdOutlineShoppingCart suppressHydrationWarning />
      </Link>
    </div>
  );
}
