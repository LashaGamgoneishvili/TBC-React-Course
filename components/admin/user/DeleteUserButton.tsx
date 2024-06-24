"use client";
import { deleteUserAction } from "../../../actions";

export default function DeleteUserButton({ id }: { id: string }) {
  console.log("DeleteUserButton", id);
  return (
    <button
      onClick={() => {
        deleteUserAction(id);
      }}
    >
      &#10005;
    </button>
  );
}
