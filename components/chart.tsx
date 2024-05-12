"use client";

import { MdOutlineShoppingCart } from "react-icons/md";

export default function Chart() {
  return (
    <>
      <div className="text-xl relative">
        <span className="absolute text-xs -top-3 right-1">0</span>
        <MdOutlineShoppingCart />
      </div>
    </>
  );
}
