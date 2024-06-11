"use client";

import Link from "next/link";
import Image from "next/image";
import userImage from "../../../../public/Assets/2815428.png";
import productImage from "../../../../public/Assets/images.png";
import { useRouter } from "next/navigation";

export default function UsersPage() {
  const router = useRouter();

  function handleClickUser() {
    router.push("/user");
  }
  function handleClickPage() {
    router.push("/AdminProduct");
  }
  return (
    <>
      <div className="flex justify-center items-center w-full min-h-fit gap-8">
        <div
          className="flex flex-col  gap-8 justify-center items-center p-16 hover:scale-105 transition-all ease-out duration-500 bg-gray-100 shadow-md rounded-md cursor-pointer"
          onClick={handleClickUser}
        >
          <Image
            src={userImage}
            width={150}
            height={150}
            priority
            alt="Person-logo"
          />
          <Link
            href="/user"
            className=" rounded-md bg-[#0ea5e9] p-2 text-[#fff] transition-all duration-300 hover:bg-[#0369a1] focus:ring"
          >
            User Page
          </Link>
        </div>
        <div
          className="flex flex-col gap-8 h-85% justify-center items-center p-16 hover:scale-[1.05] transition-all ease-out duration-500 bg-gray-100 shadow-md rounded-md cursor-pointer"
          onClick={handleClickPage}
        >
          <Image
            src={productImage}
            width={150}
            height={150}
            priority
            alt="Person-logo"
          />
          <Link
            href="/AdminProduct"
            className=" rounded-md bg-[#0ea5e9] p-2 text-[#fff] transition-all duration-300 hover:bg-[#0369a1] focus:ring"
          >
            Product Page
          </Link>
        </div>
      </div>
    </>
  );
}
