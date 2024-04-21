"use server";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../constant";
import Image from "next/image";
import logo from "../public/Assets/logo.jpg";
import Link from "next/link";
import LogautButton from "./logoutbtn";
import { logout } from "@/app/actions";

export default async function Header() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  async function handleLoagut() {
    "use server";
    await logout();
  }

  return (
    <header>
      <div className="flex h-14 items-center justify-between p-4">
        <a href="/">
          <Image
            src={logo}
            alt="Pringle's logo"
            priority={true}
            className="  mt-10 h-24 w-auto rounded-[8px]"
          />
        </a>
        <nav>
          <ul className="flex  items-start justify-start  gap-12 ">
            <li className=" cursor-pointer p-1 text-[#333]  [transition:all_ease_0.2s] 	hover:border-b  hover:border-[#333]">
              <Link href="/">Home</Link>
            </li>
            <li className=" cursor-pointer p-1 text-[#333]  [transition:all_ease_0.2s] 	hover:border-b  hover:border-[#333]">
              <Link href="/profile">Profile</Link>
            </li>

            <li className=" cursor-pointer p-1 text-[#333]  [transition:all_ease_0.2s] 	hover:border-b  hover:border-[#333]">
              <Link href="/blog">Blog</Link>
            </li>

            <li className=" cursor-pointer p-1 text-[#333]  [transition:all_ease_0.2s] 	hover:border-b  hover:border-[#333]">
              <Link href="/contact">Contact</Link>
            </li>
            <LogautButton handleLoagut={handleLoagut} />
          </ul>
        </nav>
      </div>
    </header>
  );
}
