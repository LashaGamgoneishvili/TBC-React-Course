"use client";
import toast from "react-hot-toast";
import { deleteUserAction } from "../../../actions";

export default function DeleteUserButton({ id }: { id: string }) {
  console.log("DeleteUserButton", id);
  return (
    <button
      onClick={async () => {
        const response = await deleteUserAction(id);
        if (response) {
          toast.error("User successfully deleted");
        }
      }}
    >
      &#10005;
    </button>
  );
}
