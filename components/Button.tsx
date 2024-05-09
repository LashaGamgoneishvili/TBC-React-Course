"use client";
import { deleteUserAction } from "../actions";

export default function Button({ id }: { id: number }) {
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
