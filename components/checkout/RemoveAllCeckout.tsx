"use client";
import { useAppContext } from "../../app/context/index";
import { deleteAllItem } from "../../actions";

export default function RemoveAllCheckout() {
  const { setState } = useAppContext();

  function handleClickReset() {
    deleteAllItem();
    setState(0);
  }
  return (
    <button
      onClick={handleClickReset}
      className=" top-24 right-16 bg-[#3b82f6] text-white px-4 py-2 rounded-md mb-5"
    >
      Remove All
    </button>
  );
}
