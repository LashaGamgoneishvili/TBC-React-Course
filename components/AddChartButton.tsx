"use client";
import { useState } from "react";

export default function AddChartButton({ id }: { id: number }) {
  const [item, setItem] = useState(0);

  function handlecklick() {}

  return (
    <>
      <button
        className="  text-sm  border-b-2 border-black dark:border-white active:border-b-0"
        onClick={() => handlecklick()}
      >
        Add to Chart
      </button>
    </>
  );
}
