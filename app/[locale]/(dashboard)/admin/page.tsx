"use client";
import Link from "next/link";
import Image from "next/image";
import userImage from "../../../../public/Assets/2815428.png";
import productImage from "../../../../public/Assets/images.png";
import blogImage from "../../../../public/Assets/blog/111-tRWJKdFbEksGhmgQCY43vJjiFYN3D5.jpg";
import { useRouter } from "next/navigation";

export default function UsersPage() {
  const router = useRouter();

  function handleClickUser() {
    router.push("/user");
  }
  function handleClickProduct() {
    router.push("/AdminProduct");
  }
  function handleClickBlog() {
    router.push("/blogs");
  }
  return (
    <>
      <div className="flex justify-center items-center mt-5 w-full min-h-fit gap-8">
        <div
          className="flex flex-col  gap-8 justify-center items-center p-16 hover:scale-[1.02] transition-all ease-out duration-500  shadow-md  cursor-pointer"
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
            Users Page
          </Link>
        </div>
        <div
          className="flex flex-col gap-8 h-85% justify-center items-center p-16 hover:scale-[1.02] transition-all ease-out duration-500 shadow-md  cursor-pointer"
          onClick={handleClickProduct}
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
            Products Page
          </Link>
        </div>
        <div
          className="flex flex-col gap-8 h-85% justify-center items-center  py-16 hover:scale-[1.02] transition-all ease-out duration-500 shadow-md  cursor-pointer"
          onClick={handleClickBlog}
        >
          <Image
            src={blogImage}
            width={270}
            height={150}
            priority
            alt="Person-logo"
          />
          <Link
            href="/blogs"
            className=" rounded-md bg-[#0ea5e9] p-2 text-[#fff] transition-all duration-300 hover:bg-[#0369a1] focus:ring"
          >
            Blogs Page
          </Link>
        </div>
      </div>
    </>
  );
}
