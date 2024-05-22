"use client";
import { addChartFunction } from "../../actions";
import { useAppContext } from "../../app/context/index";

export default function AddChartButton({ productId }: { productId: number }) {
  const { setState } = useAppContext();

  function handleAddButton() {
    addChartFunction(productId);
    setState((perv: number) => Number(perv) + 1);
  }

  return (
    <button
      className="text-sm  border-b-2 border-black dark:border-white active:border-b-0"
      onClick={() => handleAddButton()}
    >
      Add to cart
    </button>
  );
}
