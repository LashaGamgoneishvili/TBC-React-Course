"use client";
import { deleteAllItem } from "@/actions";
import { useAppContext } from "@/app/context";
import Link from "next/link";
import { useEffect } from "react";

export default function SuccessComponent() {
  const { setState } = useAppContext();

  useEffect(() => {
    deleteAllItem();
    setState(0);
  }, [setState]);
  return (
    <div className="felx justify-center items-center">
      <Link
        href="shipping"
        className="bg-[#3b82f6] text-white px-8 md:px-14 py-2 md:py-4 hover:bg-white hover:text-[#68c986] border duration-500 border-white hover:border-[#3b82f6] rounded-md cursor-pointer "
      >
        Check Your Orders
      </Link>
    </div>
  );
}
