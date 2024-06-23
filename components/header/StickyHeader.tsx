"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import LanguageChanger from "../LanguageChanger";
// import { CiSearch } from "react-icons/ci";
import Cart from "./Cart";
import Latest from "./Latest";
import Blog from "./Blog";
import Pages from "./Pages";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import AuthDropdown from "./AuthDropdown";
import { Tillana } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BurgerManue from "./BurgerManue";

const tillana = Tillana({
  subsets: ["latin"],
  weight: "400",
});

function StickyHeader({ translations }: StickyHeaderProps) {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    const scrollpoint = window.innerHeight - 400;
    if (window.scrollY >= scrollpoint) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  const { user } = useUser();
  const typedUser = user as User | undefined;
  return (
    <header
      className={`h-28 flex items-center z-50   ${tillana.className} ${
        header
          ? "fixed bg-white w-full shadow-md dark:bg-[#21252b] animate-appearHeader"
          : "h-28 flex items-center z-10 shadow-sm"
      }`}
      // key={header ? "fixed-header" : "regular-header"}
    >
      {header ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.95, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className=" flex h-fit sm:h-fit items-center justify-between w-full  sm:justify-between px-5   sm:mx-6"
          >
            <div className="righteous">
              <Link href="/">
                <span className="sm:text-[32px] text-2xl text-black dark:text-blue-500">
                  T
                </span>
                <span className="sm:text-2xl text-xl text-black dark:text-blue-500">
                  ime
                </span>
                <span className="sm:text-[32px] text-2xl text-red-600"> Z</span>
                <span className="sm:text-2xl text-xl text-red-600">one</span>
              </Link>
            </div>
            <nav className="hidden lg:flex ">
              <ul className="flex  items-center justify-center 2xl:gap-6 xl:gap-6 lg:gap-6">
                <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff2020] hover:duration-300">
                  <Link href="/">{translations.home}</Link>
                </li>
                <li className=" cursor-pointer p-1    hover:text-[#ff2020] hover:duration-300">
                  <Link href="/shoppingPage">{translations.shop}</Link>
                </li>
                <li className="hover:text-[#ff2020] hover:duration-300 cursor-pointer">
                  <Link href="/about">{translations.about}</Link>
                </li>
                <li className=" hover:duration-300 cursor-pointer relative">
                  <span className="absolute bg-[#ff003c] top-6 left-14 rounded-lg  shadow-gray-400 dark:shadow-gray-600 shadow-md py-1 px-3 text-[10px] text-white">
                    Hot
                  </span>
                  <Latest>{translations.latest}</Latest>
                </li>

                <li className=" cursor-pointer p-1  [transition:all_ease_0.2s]  hover:duration-300">
                  <Blog>{translations.blog}</Blog>
                </li>
                <li className=" cursor-pointer p-1 [transition:all_ease_0.2s]  hover:duration-300">
                  <Pages>{translations.pages}</Pages>
                </li>

                <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff2020] hover:duration-300">
                  <Link href="/contact">{translations.contact}</Link>
                </li>
              </ul>
            </nav>

            <div className="flex sm:gap-4 gap-2">
              <div className="flex justify-center items-center gap-4 text-xl ">
                {/* <div className="hover:text-red-500">
                  <CiSearch />
                </div> */}
                {typedUser && typedUser.role[0] === "admin" && (
                  <div className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff2020] hover:duration-300">
                    <Link href="/admin">
                      <MdOutlineAdminPanelSettings />
                    </Link>
                  </div>
                )}
                <div className="relative">
                  <AuthDropdown user={user} />
                </div>
                {user && typedUser?.role[0] !== "admin" && (
                  <div className="hover:text-red-500">
                    <Cart />
                  </div>
                )}
              </div>
              <LanguageChanger />
              <div className=" flex justify-start rounded-md  items-center">
                <ThemeSwitch />
              </div>
              <BurgerManue translations={translations} />
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.95, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className=" flex h-fit items-center flex-wrap justify-between w-full mx-6 z-20 "
          >
            <div className=" righteous">
              <Link href="/">
                <span className="sm:text-[32px] text-2xl text-black dark:text-blue-500">
                  T
                </span>
                <span className="sm:text-2xl text-xl text-black dark:text-blue-500">
                  ime
                </span>
                <span className="sm:text-[32px] text-2xl text-red-600"> Z</span>
                <span className="sm:text-2xl text-xl text-red-600">one</span>
              </Link>
            </div>
            <nav className="hidden lg:flex ">
              <ul className="flex  items-center justify-center  2xl:gap-8   lg:gap-6">
                <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff2020] hover:duration-300">
                  <Link href="/">{translations.home}</Link>
                </li>
                <li className=" cursor-pointer p-1    hover:text-[#ff2020] hover:duration-300">
                  <Link href="/shoppingPage">{translations.shop}</Link>
                </li>
                <li className="hover:text-[#ff2020] hover:duration-300 cursor-pointer">
                  <Link href="/about">{translations.about}</Link>
                </li>
                <li className=" hover:duration-300 cursor-pointer relative">
                  <span className="absolute bg-[#ff003c] top-6 left-14 rounded-lg  shadow-gray-400 dark:shadow-gray-600 shadow-md py-1 px-3 text-[10px] text-white">
                    Hot
                  </span>
                  <Latest>{translations.latest}</Latest>
                </li>

                <li className=" cursor-pointer p-1  [transition:all_ease_0.2s]  hover:duration-300">
                  <Blog>{translations.blog}</Blog>
                </li>
                <li className=" cursor-pointer p-1 [transition:all_ease_0.2s]  hover:duration-300">
                  <Pages>{translations.pages}</Pages>
                </li>

                <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff2020] hover:duration-300">
                  <Link href="/contact">{translations.contact}</Link>
                </li>
              </ul>
            </nav>

            <div className="flex sm:gap-4 gap-2  justify-center items-center">
              <div className="flex justify-center items-center sm:gap-4 gap-2 text-xl ">
                {/* <div className="hover:text-red-500">
                  <CiSearch />
                </div> */}
                {typedUser && typedUser.role[0] === "admin" && (
                  <div className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff2020] hover:duration-300">
                    <Link href="/admin">
                      <MdOutlineAdminPanelSettings />
                    </Link>
                  </div>
                )}
                <div className="relative">
                  <AuthDropdown user={user} />
                </div>
                {user && typedUser?.role[0] !== "admin" && (
                  <div className="hover:text-red-500">
                    <Cart />
                  </div>
                )}
              </div>
              <LanguageChanger />
              <div className=" flex justify-start rounded-md  items-center">
                <ThemeSwitch />
              </div>
              <BurgerManue translations={translations} />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </header>
  );
}

export default StickyHeader;
