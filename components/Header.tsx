"use server";
import Link from "next/link";
import LogautButton from "./logoutbtn";
import ThemeSwitch from "./ThemeSwitch";
import TranslationsProvider from "./TranslationsProvider";
import LanguageChanger from "./LanguageChanger";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HeaderProps } from "../types/types";

export default async function Header({
  translator,
  resources,
  locale,
  namespaces,
}: HeaderProps) {
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={namespaces}
    >
      <header className="flex w-full  items-center">
        <div className="flex h-24 items-center gap-7 justify-between p-4 w-full">
          <div className="ml-8">
            <Link href="/">
              <span className="text-[32px] text-black dark:text-blue-500">
                T
              </span>
              <span className="text-2xl text-black dark:text-blue-500">
                ime
              </span>
              <span className="text-[32px] text-red-600"> Z</span>
              <span className="text-2xl text-red-600">one</span>
            </Link>
          </div>
          <nav className="flex gap-4 ">
            <ul className="flex  items-center justify-center  gap-12 ">
              <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff5c4b] hover:duration-300">
                <Link href="/">{translator("header:header_home")}</Link>
              </li>
              <li className=" cursor-pointer p-1   [transition:all_ease_0.2s]   hover:duration-300  hover:text-[#ff5c4b]">
                <Link href="/profile">
                  {translator("header:header_Profile")}
                </Link>
              </li>

              <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff5c4b] hover:duration-300">
                <Link href="/blogs">{translator("header:header_blog")}</Link>
              </li>

              <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff5c4b] hover:duration-300">
                <Link href="/contact">
                  {translator("header:header_contact")}
                </Link>
              </li>
              <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff5c4b] hover:duration-300">
                <Link href="/admin">{translator("admin")}</Link>
              </li>
            </ul>
          </nav>
          <div className="flex gap-4">
            <div className="flex justify-center items-center gap-4 ">
              <CiSearch />
              <GoPerson />
              <MdOutlineShoppingCart />
            </div>
            <LanguageChanger />
            <div className=" flex justify-start rounded-md border items-start border-gray-500 outline-none dark:bg-slate-700">
              <ThemeSwitch />
            </div>
            <LogautButton />
          </div>
        </div>
      </header>
    </TranslationsProvider>
  );
}
