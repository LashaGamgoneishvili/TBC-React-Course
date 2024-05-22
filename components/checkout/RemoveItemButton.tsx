"use client";
import { useAppContext } from "../../app/context/index";
import { deleteSingleCartItem } from "../../actions";

export default function RemoveItemButton({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}) {
  const { setState } = useAppContext();
  const handleClickRemove = () => {
    deleteSingleCartItem(productId);
    setState((prev: number) => prev - quantity);
  };

  return (
    <button
      className="text-sm  border-black dark:border-white "
      onClick={() => handleClickRemove()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#333"
      >
        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
      </svg>
    </button>
  );
}
