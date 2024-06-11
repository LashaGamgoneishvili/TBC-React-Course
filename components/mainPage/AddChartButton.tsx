"use client";
import { addChartFunction } from "../../actions";
import { useAppContext } from "../../app/context";

export default function AddChartButton({ productId }: { productId: number }) {
  const { state, setState } = useAppContext();

  function handleAddButton() {
    console.log(state);
    addChartFunction(productId);
    setState((prev: number) => Number(prev) + 1);
  }

  return (
    <button
      className="text-xl text-white dark:text-black "
      onClick={handleAddButton}
    >
      Add to cart
    </button>
  );
}
