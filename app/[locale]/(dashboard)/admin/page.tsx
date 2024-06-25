"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";

export default function UsersPage() {
  const { user } = useUser();
  const router = useRouter();
  const role = user?.role;
  const typedUser = user as User | undefined;

  useEffect(() => {
    // Your click handling logic here
    if (typedUser && typedUser.role[0] !== "admin") {
      router.push("/");
      console.log("role", role);
    }
  }, [router, user, role, typedUser]);

  function handleClickUser() {
    router.push("/user");
  }
  function handleClickProduct() {
    router.push("/AdminProduct");
  }
  function handleClickShipping() {
    router.push("/shipping");
  }
  function handleClickBlog() {
    router.push("/blogs");
  }
  return (
    <>
      <div className="flex justify-center my-20 items-center flex-col lg:flex-row w-full min-h-fit gap-8">
        <div
          className="flex flex-col  gap-8 justify-center h-96 items-center p-16 hover:scale-[1.02] transition-all ease-out duration-500  shadow-md  cursor-pointer"
          onClick={handleClickUser}
        >
          <Image
            src="https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/user-25mvgDzIwNAL0xGnKHHKmieCnYqIVq.png"
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
          className="flex flex-col gap-8 h-96 justify-center items-center p-16 hover:scale-[1.02] transition-all ease-out duration-500 shadow-md  cursor-pointer"
          onClick={handleClickProduct}
        >
          <Image
            src="https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/popular4.png-Lz6l8B682uqHWbtNXJCMCFDFz2yK86.webp"
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
          className="flex flex-col gap-8 h-96 justify-center items-center p-16 hover:scale-[1.02] transition-all ease-out duration-500 shadow-md  cursor-pointer"
          onClick={handleClickShipping}
        >
          <Image
            src="https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/Ordered%20Products%20-7HeWB0XFtThelmPHZNYs6aCQK1rUKh.jpg"
            width={150}
            height={150}
            priority
            alt="Person-logo"
          />
          <Link
            href="/shipping"
            className=" rounded-md bg-[#0ea5e9] p-2 text-[#fff] transition-all duration-300 hover:bg-[#0369a1] focus:ring"
          >
            Ordered Products
          </Link>
        </div>
        <div
          className="flex flex-col gap-8 h-96 h-85% justify-center items-center  py-16 hover:scale-[1.02] transition-all ease-out duration-500 shadow-md  cursor-pointer"
          onClick={handleClickBlog}
        >
          <Image
            src="https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/single_blog_1.png-AyXMWcz8CnHZvQDDVygnh7LcyJIAcr.webp"
            width={280}
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
