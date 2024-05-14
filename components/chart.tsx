"use client";

import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Chart() {
  return (
    <>
      <div className="text-xl relative">
        <Link href="/checkout">
          <span className="absolute text-xs -top-3 right-[6px] text-red-700">
            0
          </span>
          <MdOutlineShoppingCart />
        </Link>
      </div>
    </>
  );
}
