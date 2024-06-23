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
      className="  bg-[#3b82f6] text-white px-10 md:px-14 py-2 md:py-4 hover:bg-white hover:text-[#ff2020] border duration-500 border-white hover:border-[#3b82f6] rounded-md "
    >
      Remove All
    </button>
  );
}
