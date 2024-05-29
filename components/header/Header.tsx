"use server";
import Link from "next/link";
// import LogautButton from "../auth/logoutbtn";
import ThemeSwitch from "./ThemeSwitch";
import TranslationsProvider from "../TranslationsProvider";
import LanguageChanger from "../languageChanger";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { HeaderProps } from "../../types/types";
import Cart from "./Cart";
import { CiLogout } from "react-icons/ci";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Header({
  translator,
  resources,
  locale,
  namespaces,
}: HeaderProps) {
  const session = await getSession();
  const user = session?.user;

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={namespaces}
    >
      <header className="flex w-full  items-center shadow">
        <div className="flex h-24 items-center gap-7 justify-between p-4 w-full">
          <div className="ml-[2%] righteous">
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
          <nav className="flex ">
            <ul className="flex  items-center justify-center  2xl:gap-14 xl:gap-12 md:gap-6 sm:gap-4">
              <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff5c4b] hover:duration-300">
                <Link href="/">{translator("header:header_home")}</Link>
              </li>
              {user && (
                <li className=" cursor-pointer p-1   [transition:all_ease_0.2s]   hover:duration-300  hover:text-[#ff5c4b]">
                  <Link href="/profile">
                    {translator("header:header_Profile")}
                  </Link>
                </li>
              )}

              <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff5c4b] hover:duration-300">
                <Link href="/blogs">{translator("header:header_blog")}</Link>
              </li>

              <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff5c4b] hover:duration-300">
                <Link href="/contact">
                  {translator("header:header_contact")}
                </Link>
              </li>

              {user && (
                <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff5c4b] hover:duration-300">
                  <Link href="/admin">{translator("admin")}</Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="flex gap-4">
            <div className="flex justify-center items-center gap-4 text-xl ">
              <div className="hover:text-red-500">
                <CiSearch />
              </div>
              <div className=" relative hover:first">
                <div className=" hidden absolute top-7 text-sm hover:flex flex-col gap-2 -right-6 border border-black rounded-md p-2 bg-gray-200">
                  <p className="hover:text-red-500">Login</p>
                  <p className="hover:text-red-500">Logout</p>
                </div>
                <div className="hover:text-red-500">
                  {!user ? (
                    <a title="login" href="/api/auth/login">
                      <GoPerson />
                    </a>
                  ) : (
                    <div className="">
                      <a title="logout" href="/api/auth/logout">
                        <CiLogout />
                      </a>
                    </div>
                  )}
                </div>
              </div>
              {user && (
                <div className="hover:text-red-500">
                  <Cart />
                </div>
              )}
            </div>
            <LanguageChanger />
            <div className=" flex justify-start rounded-md border items-start border-gray-500 outline-none dark:bg-slate-700">
              <ThemeSwitch />
            </div>
            {/* <LogautButton /> */}
          </div>
        </div>
      </header>
    </TranslationsProvider>
  );
}
