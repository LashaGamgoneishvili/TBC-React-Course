"use client";

import { useRouter } from "next/navigation";

export default function LogautButton({ handleLoagut }) {
  const router = useRouter();

  return (
    <li
      onClick={() => {
        handleLoagut();
        router.push("/login");
      }}
      className=" cursor-pointer p-1 text-[#333] border-2 rounded-md hover:border-red-500  [transition:all_ease_0.2s]  border-[#333]"
    >
      Logout
    </li>
  );
}
