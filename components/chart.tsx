"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useLocalStorageState } from "../hooks";

export default function Chart() {
  const [value, _] = useLocalStorageState("chart");

  const [localStorageValue, setLocalStorageValue] = useState(value);

  // Parse localStorageValue whenever it changes
  // const parsedChart = localStorageValue ? JSON.parse(localStorageValue) : [];
  useEffect(() => {
    const handleStorageChange = () => {
      // Update the state whenever localStorage changes
      setLocalStorageValue(localStorage.getItem("chart"));
      console.log("change");
    };

    // Add event listener for the storage event
    window.addEventListener("storage", handleStorageChange);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Calculate selectedNumber based on parsedChart
  const selectedNumber = localStorageValue?.reduce((acc: number, curr: any) => {
    return acc + curr.count;
  }, 0);

  return (
    <>
      <div className="text-xl relative">
        <Link href="/checkout">
          <span className="absolute text-xs -top-4 right-[5px] text-red-700">
            {selectedNumber}
          </span>
          <MdOutlineShoppingCart />
        </Link>
      </div>
    </>
  );
}
