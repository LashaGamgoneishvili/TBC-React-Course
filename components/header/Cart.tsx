"use client";
import Link from "next/link";
import { LiaOpencart } from "react-icons/lia";
import { useAppContext } from "../../app/context/index";
import { useEffect } from "react";
import { cartCount } from "../../actions";

export default function Chart() {
  const { state, setState } = useAppContext();

  useEffect(() => {
    async function getCart() {
      try {
        const count = await cartCount();
        setState(count);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    }
    getCart();
  }, [setState]);

  return (
    <div className="text-xl relative">
      <Link href="/checkout">
        <span className="absolute text-xs -top-4 right-[5px] text-red-700 dark:text-blue-500">
          {state ? state : 0}
        </span>
        <LiaOpencart suppressHydrationWarning />
      </Link>
    </div>
  );
}
